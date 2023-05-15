import { useState, useEffect } from 'react';
import { getUser } from './api';

const useFetchUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const response = await getUser(token);
                if (response.data) {
                    setUser(response.data);
                }
            }
            setIsLoading(false);
        };
        fetchUser();
    }, []);

    return { user, setUser, isLoading };
};

export default useFetchUser;
