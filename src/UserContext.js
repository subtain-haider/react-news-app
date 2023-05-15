import { createContext } from 'react';
import useFetchUser from './useFetchUser';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { user, setUser, isLoading } = useFetchUser();

    return (
        <UserContext.Provider value={{ user, setUser, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
