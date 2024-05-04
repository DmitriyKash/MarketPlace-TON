import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductEditForm from './ProductEditForm';

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null); // Track the ID of the product being edited
  const [formData, setFormData] = useState({ title: '', description: '', price: '' });

  const handleNewProduct = () => {
    setEditingProductId(null); // Clear any editing product ID
    setFormData({ title: '', description: '', price: '' }); // Reset form for new product
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    if (editingProductId) {
      setProducts(prevProducts => prevProducts.map(product => 
        product.id === editingProductId ? { ...product, [name]: value } : product
      ));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { ...formData, id: Date.now() }; // Create a new product with a unique ID
    if (editingProductId) {
      handleUpdateProduct(editingProductId);
    } else {
      setProducts(prevProducts => [...prevProducts, newProduct]);
    }
    handleNewProduct(); // Reset form after submission
  };

  const handleDeleteProduct = (productId) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  const handleEditProduct = (productId) => {
    const product = products.find(p => p.id === productId);
    setFormData(product);
    setEditingProductId(productId);
  };

  const handleUpdateProduct = (productId) => {
    setProducts(prevProducts => prevProducts.map(product => 
      product.id === productId ? { ...formData, id: productId } : product
    ));
    setEditingProductId(null);
  };

  return (
    <div>
      <h1>Панель администратора</h1>
      <button onClick={handleNewProduct}>Add New Product</button>
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
        <button type="submit">Save Product</button>
      </form>
      
      <ProductList products={products} onDelete={handleDeleteProduct} onEdit={handleEditProduct} isAdmin={true} />

      {editingProductId && (
        <ProductEditForm
          product={formData}
          onChange={handleChange}
          onSubmit={() => handleUpdateProduct(editingProductId)}
        />
      )}
    </div>
  );
}

export default AdminPage;
