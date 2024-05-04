import React from 'react';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';

function Login() {
    const { connect } = useTonConnectUI();

    const handleLogin = async () => {
        try {
            await connect(); // Просто выполняем подключение
            console.log("User connected");
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <TonConnectButton onClick={handleLogin} />
        </div>
    );
}

export default Login;
