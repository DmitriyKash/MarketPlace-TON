import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const userAddress = useTonAddress(true); // Вызовите useTonAddress на верхнем уровне компонента
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // В этом useEffect, мы просто реагируем на изменения userAddress.
        if (userAddress) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [userAddress]); // Зависимость от userAddress

    return (
        <AuthContext.Provider value={{ isAuthenticated, userAddress }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
