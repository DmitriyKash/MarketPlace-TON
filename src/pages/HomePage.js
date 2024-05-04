import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Filter from '../components/Filter/Filter';
import ProductList from '../components/ProductList/ProductList';

function HomePage() {
  const [products, setProducts] = useState([]); // Предполагается, что тут будут данные с сервера
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Filter options={[{value: 'cat1', label: 'Категория 1', checked: false}]}/>
       {/* onChange=Функция для обработки изменений */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default HomePage;
