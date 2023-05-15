import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../api';
import UserContext from '../UserContext';

const Logout = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await logout();
            setUser(null);
            navigate('/login');
        })();
    }, [setUser, navigate]);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
};

export default Logout;
