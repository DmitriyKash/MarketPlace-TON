import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';

export const products = [
    { id: '1', name: 'Product 1', description: 'Description 1', price: '100 TON' },
    { id: '2', name: 'Product 2', description: 'Description 2', price: '200 TON' }
  ];
  

  const Product = ({ product }) => {
    return (
      <div className={styles.product}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <Link to={`/product/${product.id}`}>View Details</Link>
      </div>
    );
  };
  
  export default Product;
