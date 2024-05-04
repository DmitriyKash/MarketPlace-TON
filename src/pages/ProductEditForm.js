import React, { useState } from 'react';

function ProductEditForm({ product, onUpdate }) {
    // Ensure all fields are initialized
    const initialFormData = {
      title: product.title || '',
      description: product.description || '',
      price: product.price || '',
      // Initialize other fields similarly
    };
  
    const [formData, setFormData] = useState(initialFormData);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
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
        <button type="submit">Сохранить изменения</button>
      </form>
    );
  }
  
  export default ProductEditForm;
  
