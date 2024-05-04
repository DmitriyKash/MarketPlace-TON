import React, { useState } from 'react';
import Navigation from './Navigation';
import { useCart } from './CartContext'; // Ensure this is the correct path

function CheckoutPage() {
  const { cartItems, clearCart } = useCart(); // Access cart items and clearCart function from context
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  // Calculate total cost
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally, you could add a confirmation step before clearing the cart
    console.log('Submitting Order:', formData, 'Total Cost:', totalCost);
    clearCart();
    alert('Order submitted! Check console for details.');
    // Here you might send the data to a server via an API call
  };

  return (
    <div>
      <header>
        <h1>Оформление заказа</h1>
        <Navigation />
      </header>
      <main>
        <section>
          <h2>Ваш заказ</h2>
          {cartItems.length > 0 ? (
            <>
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>Количество: {item.quantity}</p>
                  <p>Цена за шт.: ${item.price}</p>
                </li>
              ))}
              </ul>
            <h3>Общая стоимость: ${totalCost}</h3>
          </>) : (
            <p>Ваша корзина пуста.</p>
          )}
        </section>
        <section>
          <h2>Данные для доставки</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Имя:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="address">Адрес:</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="phone">Телефон:</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <button type="submit">Оформить заказ</button>
          </form>
        </section>
      </main>
      <footer>
        <p>© 2024 TON Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CheckoutPage;
