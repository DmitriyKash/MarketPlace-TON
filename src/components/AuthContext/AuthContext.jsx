// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Предположим, что у вас есть методы для входа и выхода
    const login = async () => {
        // Здесь код для вызова TON Connect API для аутентификации
        const userData = await tonConnectApi.login();
        setUser(userData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        // Здесь код для вызова TON Connect API для завершения сессии
        tonConnectApi.logout();
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
