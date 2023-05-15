import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { register } from '../api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await register({ name, email, password, password_confirmation: passwordConfirmation });

        if (response.data) {
            // Save user data to Redux store
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data,
            });
            navigate('/');
        } else {
            // Handle registration error
            setErrors(response.errors);
        }
        setLoading(false);
    };

    const hasError = field => !!errors[field];

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form onSubmit={handleSubmit}>
                        <p className="h5 text-center mb-4">Sign up</p>
                        <div className="form-group grey-text">
                            <MDBInput
                                label="Type your name"
                                icon="user"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className={hasError('name') ? 'is-invalid' : ''}
                            />
                            {hasError('name') && <div className="text-danger small error-message">{errors.name}</div>}
                        </div>
                        <div className="form-group grey-text">
                            <MDBInput
                                label="Type your email"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={hasError('email') ? 'is-invalid' : ''}
                            />
                            {hasError('email') && <div className="text-danger small error-message">{errors.email}</div>}
                        </div>
                        <div className="form-group grey-text">
                            <MDBInput
                                label="Type your password"
                                icon="lock"
                                group
                                type="password"
                                validate
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className={hasError('password') ? 'is-invalid' : ''}
                            />
                            {hasError('password') && <div className="text-danger small error-message">{errors.password}</div>}
                        </div>
                        <div className="form-group grey-text">
                            <MDBInput
                                label="Confirm your password"
                                icon="lock"
                                group
                                type="password"
                                validate
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                required
                                className={hasError('password_confirmation') ? 'is-invalid' : ''}
                            />
                            {hasError('password_confirmation') && <div className="text-danger small error-message">{errors.password_confirmation}</div>}
                        </div>
                        <div className="form-group text-center">
                            <MDBBtn type="submit" disabled={loading}>
                                {loading ? 'Loading...' : 'Register'}
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Register;
