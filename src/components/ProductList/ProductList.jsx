import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, TextField } from '@mui/material';
import { useProducts } from '../ProductContext/ProductContext';

function ProductList() {
  const navigate = useNavigate(); // Хук для навигации
  const [searchTerm, setSearchTerm] = useState('');
  const { products } = useProducts();

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (id) => {
    navigate(`/product/${id}`); // Перенаправление на страницу деталей продукта
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <TextField
        variant="outlined"
        placeholder="Поиск товаров..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: 20, width: '100%' }}
      />
      {filteredProducts.map((product) => (
        <Card 
          key={product.id} 
          style={{ margin: 10, width: 'calc(50% - 20px)', height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} 
          onClick={() => handleCardClick(product.id)}
        >
          <CardActionArea style={{ flexGrow: 1 }}>
            <CardMedia
              component="img"
              alt={product.title}
              style={{ height: 140, objectFit: 'cover' }}
              image={product.image}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
                {product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default ProductList;
