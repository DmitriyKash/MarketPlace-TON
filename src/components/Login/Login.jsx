import React from 'react';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';

function Login() {
    const { connect } = useTonConnectUI();

    const handleLogin = async () => {
        console.log("Attempting to connect");  // Проверяем начало попытки подключения
        try {
            await connect();
            console.log("User connected successfully");  // Успешное подключение
        } catch (error) {
            console.error('Login failed:', error);  // Ошибки подключения
        }
    };

    return (
        <div>
            <TonConnectButton onClick={handleLogin} />
        </div>
    );
}

export default Login;
