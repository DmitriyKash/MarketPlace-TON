import React from 'react';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';

function Login() {
    const { connect, disconnect, wallet } = useTonConnectUI();

    const handleLogin = async () => {
        try {
            await connect();
            console.log(wallet); // Проверка объекта wallet
            if (wallet) {
                registerUser(wallet.address);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const registerUser = (address) => {
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userAddress: address })
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    
    

    return (
        <div>
            <TonConnectButton onClick={handleLogin} />
        </div>
    );
}

export default Login;


