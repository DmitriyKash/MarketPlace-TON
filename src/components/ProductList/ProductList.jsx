import React from 'react';
import Product from '../Product/Product';
import { products } from '../Product/Product';
import styles from './ProductList.module.css';

const ProductList = () => {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
