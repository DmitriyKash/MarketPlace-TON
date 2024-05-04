import React, { useState } from 'react';
import Navigation from './Navigation';

function CheckoutPage({ cartItems }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    // Добавьте другие поля, если необходимо
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете отправить данные на сервер для обработки заказа
    console.log(formData);
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
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>Количество: {item.quantity}</p>
              </li>
            ))}
          </ul>
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
            {/* Добавьте другие поля формы здесь */}
            <button type="submit">Оформить заказ</button>
          </form>
        </section>
        {/* Другие разделы оформления заказа */}
      </main>
      <footer>
        <p>© 2024 TON Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CheckoutPage;
