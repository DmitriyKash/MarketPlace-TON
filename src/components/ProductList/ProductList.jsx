import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, TextField, Grid, Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useProducts } from '../ProductContext/ProductContext';

function ProductList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const { products } = useProducts();

  const filteredProducts = products.filter(product =>
    (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (category === '' || product.category === category)
  );

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Получаем уникальные категории из продуктов
  const uniqueCategories = [...new Set(products.map(product => product.category))];

  return (
    <Container>
      <TextField
        variant="outlined"
        placeholder="Поиск товаров..."
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Категория</InputLabel>
        <Select
          value={category}
          onChange={handleCategoryChange}
          label="Категория"
        >
          <MenuItem value="">
            <em>Все</em>
          </MenuItem>
          {uniqueCategories.map((cat) => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              onClick={() => handleCardClick(product.id)}
              sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CardActionArea sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  alt={product.title}
                  sx={{ height: 200 }}
                  image={product.image}
                  title={product.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" noWrap>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" noWrap>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" component="p" sx={{ mt: 2 }}>
                    Цена: {product.price} TON
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;
