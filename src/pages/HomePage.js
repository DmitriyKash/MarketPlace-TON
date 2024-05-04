import React, { useState, useEffect } from 'react';
// import SearchBar from '../components/SearchBar/SearchBar';
// import Filter from '../components/Filter/Filter';
import ProductList from '../components/ProductList/ProductList';
import Header from '../components/Header/Header';

function HomePage() {
  // const [products, setProducts] = useState([]); 
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // Загрузка данных о продуктах
  // useEffect(() => {
  //   // Здесь должен быть вызов API для получения продуктов
  //   const fetchProducts = async () => {
  //     const response = await fetch('/api/products'); // Примерный URL
  //     const data = await response.json();
  //     setProducts(data);
  //     setFilteredProducts(data); // Инициализируем отфильтрованные продукты полным списком
  //   };
  //   fetchProducts();
  // }, []);


  // const handleFilterChange = (value) => {
  //   // Реализация фильтрации в зависимости от значения
  //   // Пример фильтрации по категории
  //   const filtered = products.filter(product => product.category === value);
  //   setFilteredProducts(filtered);
  // };

  return (
    <div>
      <Header />
      {/* <SearchBar onSearch={handleSearch} /> */}
      {/* <Filter options={[{value: 'cat1', label: 'Категория 1', checked: false}]} onChange={handleFilterChange}/> */}
      <ProductList />
    </div>
  );
}

export default HomePage;
