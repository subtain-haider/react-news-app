import { createContext, useState, useContext } from 'react';
import UserContext from './UserContext';

const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
    const { user } = useContext(UserContext);
    const [preferences, setPreferences] = useState(user ? user.preferences : {});

    return (
        <PreferencesContext.Provider value={{ preferences, setPreferences }}>
            {children}
        </PreferencesContext.Provider>
    );
};

export default PreferencesContext;
