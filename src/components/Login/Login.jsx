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
import { TonConnectButton } from '@tonconnect/ui-react';
import loginButtonImage from './img/login-image.png'; // Путь к изображению кнопки входа


function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const tonConnectBtnRef = useRef(null); // Создаем референс для кнопки TON Connect

  const handleAuthentication = (status, userData) => {
    setIsAuthenticated(status);
    setUser(userData);
  };

  const simulateTonConnectClick = () => {
    tonConnectBtnRef.current?.click(); // Симуляция клика на TonConnectButton
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Пользователь: {user ? user.name : 'Нет данных'}</p>
          <button onClick={() => handleAuthentication(false, null)}>Выйти</button>
        </div>
      ) : (
        <>
          <img
            src={loginButtonImage}
            alt="Подключить кошелек"
            onClick={simulateTonConnectClick}
            style={{ cursor: 'pointer' }}
          />
          <TonConnectButton
            ref={tonConnectBtnRef}
            onLogin={(userData) => handleAuthentication(true, userData)}
            onLogout={() => handleAuthentication(false, null)}
            style={{ display: 'none' }} // Скрываем оригинальную кнопку
          />
        </>
      )}
    </div>
  );
}

export default Login;
