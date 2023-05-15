import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { login } from '../api';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await login({ email, password });

        if (response.data) {
            // Save user data to Redux store
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data,
            });
            setUser(response.data.user);
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } else {
            // Handle login error
            setErrors(response.errors);
        }
        setLoading(false);
    };

    const hasError = !!errors.email || !!errors.password;

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form onSubmit={handleSubmit}>
                        <p className="h5 text-center mb-4">Sign in</p>
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
                                className={hasError ? 'is-invalid' : ''}
                            />
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
                                className={hasError ? 'is-invalid' : ''}
                            />
                            {errors.password && <div className="text-danger small error-message">{errors.password}</div>}
                        </div>
                        <div className="form-group text-center">
                            <MDBBtn type="submit" disabled={loading}>
                                {loading ? 'Loading...' : 'Login'}
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Login;
