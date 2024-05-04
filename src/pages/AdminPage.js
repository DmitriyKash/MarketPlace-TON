import React, { useState } from 'react';
import ProductList from './ProductList'; // Импортируем компонент ProductList
import ProductEditForm from './ProductEditForm'; // Импортируем компонент ProductEditForm

function AdminPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    // Добавьте другие поля, если необходимо
  });

  const [products, setProducts] = useState([
    // Исходный список товаров, замените его на реальные данные
    { id: 1, title: 'Товар 1', description: 'Описание товара 1', price: 10 },
    { id: 2, title: 'Товар 2', description: 'Описание товара 2', price: 20 },
    { id: 3, title: 'Товар 3', description: 'Описание товара 3', price: 30 },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете отправить данные на сервер для добавления нового товара
    console.log(formData);
    // После добавления товара можно сбросить форму
    setFormData({
      title: '',
      description: '',
      price: '',
    });
  };

  const handleDeleteProduct = (productId) => {
    // Логика удаления товара
    // Обновите products, удалив товар с указанным productId
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  const handleUpdateProduct = (updatedProduct) => {
    // Логика обновления товара
    // Обновите products, заменив товар с указанным id на updatedProduct
    setProducts(prevProducts => prevProducts.map(product => {
      if (product.id === updatedProduct.id) {
        return updatedProduct;
      }
      return product;
    }));
  };

  return (
    <div>
      <h1>Панель администратора</h1>
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
        <button type="submit">Добавить товар</button>
      </form>
      
      {/* Добавляем компонент ProductList с передачей списка товаров и функции удаления */}
      <ProductList products={products} onDelete={handleDeleteProduct} />

      {/* Добавляем компонент ProductEditForm для редактирования товаров */}
      <ProductEditForm product={formData} onUpdate={handleUpdateProduct} />
    </div>
  );
}

export default AdminPage;
