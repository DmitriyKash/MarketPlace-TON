import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/profile">Профиль</Link></li>
        <li><Link to="/cart">Корзина</Link></li>
        <li><Link to="/checkout">Оформление заказа</Link></li>
        {/* Добавьте другие ссылки здесь */}
      </ul>
    </nav>
  );
}

export default Navigation;
