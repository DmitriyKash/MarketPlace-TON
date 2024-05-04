import React from 'react';

function ProductList({ products, onDelete }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Цена: {product.price}</p>
          <button onClick={() => onDelete(product.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
