import React, { useState } from 'react';

function ProfileForm() {
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
    // Здесь вы можете отправить данные на сервер для сохранения
    console.log(formData);
  };

  return (
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
      <button type="submit">Сохранить</button>
    </form>
  );
}

export default ProfileForm;
