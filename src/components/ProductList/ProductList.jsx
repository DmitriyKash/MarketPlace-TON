import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, TextField } from '@mui/material';

function ProductList() {
  const navigate = useNavigate(); // Хук для навигации
  const [searchTerm, setSearchTerm] = useState('');
  const tempProducts = [
    { 
      id: 1, 
      title: 'Apple MacBook Pro', 
      description: '16-inch, 16GB RAM', 
      image: 'path/to/image1.jpg',
      lotInfo: 'Лот #123456, доступно 5 штук',
      shippingInfo: 'Доставка в течение 3-5 рабочих дней'
    },
    { 
      id: 2, 
      title: 'Apple iPad Air', 
      description: '10.9-inch, 256GB, Space Gray', 
      image: 'path/to/image2.jpg',
      lotInfo: 'Лот #234567, доступно 3 штуки',
      shippingInfo: 'Бесплатная доставка'
    },
    { 
      id: 3, 
      title: 'Sony Headphones', 
      description: 'Noise Cancelling, Wireless', 
      image: 'path/to/image3.jpg',
      lotInfo: 'Лот #345678, доступно 10 штук',
      shippingInfo: 'Доставка за 1 день, платно'
    }
  ];

  const filteredProducts = tempProducts.filter(product =>
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
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <TextField
        variant="outlined"
        placeholder="Поиск товаров..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: 20, width: '100%' }}
      />
      {filteredProducts.map((product) => (
        <Card key={product.id} style={{ margin: 10, width: 300 }} onClick={() => handleCardClick(product.id)}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={product.title}
              height="140"
              image={product.image}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
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
