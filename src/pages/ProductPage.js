import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../components/Product/Product';
import styles from './ProductPage.module.css';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productDetails}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductPage;
