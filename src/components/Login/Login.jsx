import React, { useState } from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Правильное использование useState для пользователя

  const handleAuthentication = (status, userData) => {
    setIsAuthenticated(status);
    setUser(userData);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Пользователь: {user ? user.name : 'Нет данных'}</p>
          <button onClick={() => handleAuthentication(false, null)}>Выйти</button>
        </div>
      ) : (
        <TonConnectButton 
          onLogin={(userData) => handleAuthentication(true, userData)}
          onLogout={() => handleAuthentication(false, null)}
          style={{ backgroundColor: 'blue', color: 'white', width: '200px' }} // Увеличенная ширина для лучшего отображения текста
        />
      )}
    </div>
  );
}

export default Login;
