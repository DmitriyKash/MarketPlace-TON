// import React, { useState } from 'react';
// import { TonConnectButton } from '@tonconnect/ui-react';

// function Login() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null); // Правильное использование useState для пользователя

//   const handleAuthentication = (status, userData) => {
//     setIsAuthenticated(status);
//     setUser(userData);
//   };

//   return (
//     <div>
//       {isAuthenticated ? (
//         <div>
//           <p>Пользователь: {user ? user.name : 'Нет данных'}</p>
//           <button onClick={() => handleAuthentication(false, null)}>Выйти</button>
//         </div>
//       ) : (
//         <TonConnectButton 
//           onLogin={(userData) => handleAuthentication(true, userData)}
//           onLogout={() => handleAuthentication(false, null)}
//           style={{ backgroundColor: 'blue', color: 'white', width: '20px' }} // Пример изменения фона и цвета текста
//         />
//       )}
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import loginButtonImage from '/img/login-image.png'; // Путь к изображению кнопки входа
import logoutButtonImage from 'path/to/logout-image.png'; // Путь к изображению кнопки выхода

function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleAuthentication = (status, userData) => {
    setIsAuthenticated(status);
    setUser(userData);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Пользователь: {user ? user.name : 'Нет данных'}</p>
          <img
            src={logoutButtonImage}
            alt="Выйти"
            onClick={() => handleAuthentication(false, null)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      ) : (
        <img
          src={loginButtonImage}
          alt="Подключить кошелек"
          onClick={() => handleAuthentication(true, {})} // Подразумевается, что нужные данные пользователя передаются здесь
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  );
}

export default Login;
