import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Grid,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Pagination,
  Box
} from '@mui/material';
import { useProducts } from '../ProductContext/ProductContext';

const ITEMS_PER_PAGE = 10;

function ProductList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
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

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const uniqueCategories = [...new Set(products.map(product => product.category))];

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2, mt: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Поиск товаров..."
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          sx={{ mr: 2 }}
        />
        <FormControl sx={{ minWidth: 200 }}>
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
      </Box>
      <Grid container spacing={4}>
        {paginatedProducts.map((product) => (
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
      <Pagination
        count={pageCount}
        page={page}
        onChange={handlePageChange}
        color="primary"
        sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
}

export default ProductList;
