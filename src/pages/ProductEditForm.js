import React, { useState } from 'react';

function ProductEditForm({ product, onUpdate }) {
  const [formData, setFormData] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете отправить данные на сервер для обновления товара
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Название товара:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="description">Описание товара:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="price">Цена:</label>
        <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} />
      </div>
      {/* Добавьте другие поля формы здесь */}
      <button type="submit">Сохранить изменения</button>
    </form>
  );
}

export default ProductEditForm;
