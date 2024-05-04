// import React from 'react';
// import ProductList from '../components/ProductList/ProductList';

// const HomePage = () => {
//   return (
//     <div>
//       <h1>Welcome to the Marketplace</h1>
//       <ProductList />
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import ProductList from './ProductList';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      // Получаем данные о товарах из локального хранилища или загружаем их из API
      const storedProducts = JSON.parse(localStorage.getItem('products'));
      if (storedProducts) {
        setProducts(storedProducts);
      }
    }, 1000);
  }, []);

  return (
    <div>
      <header>
        <h1>TON Marketplace</h1>
        <Navigation />
      </header>
      <main>
        {/* Отображение всех товаров */}
        <section id="all-products">
          <h2>Все товары</h2>
          <ProductList products={products} />
        </section>
        {/* Другие разделы главной страницы */}
      </main>
      <footer>
        <p>© 2024 TON Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;



