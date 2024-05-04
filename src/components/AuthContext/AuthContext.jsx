import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userAddress, setUserAddress] = useState(useTonAddress(true));

    useEffect(() => {
        // Обновление адреса при изменении состояния подключения кошелька
        const address = useTonAddress(true);
        setUserAddress(address);
    }, [useTonAddress(true)]);

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!userAddress, userAddress }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
