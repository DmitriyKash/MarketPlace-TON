import React, { useState } from 'react';
import { useCart } from './CartContext'; // Import useCart

function ProductList({ isAdmin, onEdit, onDelete }) {
  const [sortBy, setSortBy] = useState('title');
  const products = [
    { id: 1, title: 'Apple MacBook Pro', description: '16-inch, 16GB RAM', price: 2399 },
    { id: 2, title: 'Apple iPad Air', description: '10.9-inch, 256GB, Space Gray', price: 749 },
    { id: 3, title: 'Sony Headphones', description: 'Noise Cancelling, Wireless', price: 278 }
  ];

  const { addToCart } = useCart(); // Use the context

  // Function to change the sorting type
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Function to sort products
  const sortedProducts = products.sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'price') {
      return a.price - b.price;
    }
    return 0; // Default return if no sorting condition matches
  });

  return (
    <div>
      {/* Selector for choosing the sorting type */}
      <select value={sortBy} onChange={handleSortChange}>
        <option value="title">По названию</option>
        <option value="price">По цене</option>
      </select>
      <ul>
        {sortedProducts.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Цена: {product.price} $</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            {isAdmin && (
              <>
                <button onClick={() => onEdit(product.id)}>Редактировать</button>
                <button onClick={() => onDelete(product.id)}>Удалить</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
