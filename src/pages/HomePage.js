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

function HomePage() {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [sortBy, setSortBy] = useState('title'); // По умолчанию сортируем по названию
  const [sortOrder, setSortOrder] = useState('asc'); // По умолчанию сортируем по возрастанию

  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      // Получаем предложения из локального хранилища или загружаем их из API
      const storedOffers = JSON.parse(localStorage.getItem('offers'));
      if (storedOffers) {
        setOffers(storedOffers);
        setFilteredOffers(storedOffers);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    // Функция для фильтрации и сортировки предложений
    const filterAndSortOffers = () => {
      let sortedOffers = [...offers];
      // Сортировка
      sortedOffers.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        } else {
          return b[sortBy].localeCompare(a[sortBy]);
        }
      });
      setFilteredOffers(sortedOffers);
    };
    filterAndSortOffers();
  }, [offers, sortBy, sortOrder]);

  return (
    <div>
      <header>
        <h1>TON Marketplace</h1>
        <Navigation />
      </header>
      <main>
        {/* Форма для выбора параметров сортировки и фильтрации */}
        <form>
          <label htmlFor="sortBy">Сортировать по:</label>
          <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="title">Названию</option>
            <option value="description">Описанию</option>
            {/* Другие параметры для сортировки */}
          </select>
          <label htmlFor="sortOrder">Порядок сортировки:</label>
          <select id="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
          {/* Добавьте фильтры, если необходимо */}
        </form>
        
        {/* Отображение отфильтрованных и отсортированных предложений */}
        <section id="featured-offers">
          <h2>Актуальные предложения</h2>
          <ul>
            {filteredOffers.map(offer => (
              <li key={offer.id}>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </li>
            ))}
          </ul>
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


