import React, { useState } from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [setUser] = useState(null);

  const handleAuthentication = (status, userData) => {
    setIsAuthenticated(status);
    setUser(userData);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <button onClick={() => handleAuthentication(false, null)}>Выйти</button>
        </div>
      ) : (
        <TonConnectButton 
          onLogin={(userData) => handleAuthentication(true, userData)}
          onLogout={() => handleAuthentication(false, null)}
        />
      )}
    </div>
  );
}

export default Login;
