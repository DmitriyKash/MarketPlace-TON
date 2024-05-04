import React, { useState } from 'react';
import Navigation from './Navigation';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // Функция для добавления товара в корзину
  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  // Функция для удаления товара из корзины
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // Функция для изменения количества товара в корзине
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems => prevItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  return (
    <div>
      <header>
        <h1>Корзина</h1>
        <Navigation />
      </header>
      <main>
        <section>
          <h2>Ваша корзина</h2>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>Количество: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, e.target.value)} />
              </li>
            ))}
          </ul>
        </section>
        {/* Другие разделы корзины */}
      </main>
      <footer>
        <p>© 2024 TON Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CartPage;
