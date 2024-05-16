import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Telegram Web App initialization
document.addEventListener('DOMContentLoaded', (event) => {
    const telegramWebApp = window.Telegram.WebApp;
    telegramWebApp.ready();

    // Запрос на полноэкранный режим
    telegramWebApp.expand();
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
