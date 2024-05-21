import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Select, MenuItem, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../Header/Header';
import LoginDialog from '../LoginDialog/LoginDialog';
import { useAuth } from '../AuthContext/AuthContext';
import { useProducts } from '../ProductContext/ProductContext';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [size, setSize] = useState('');
  const { isAuthenticated } = useAuth();
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const { products } = useProducts();
  const product = products.find(p => p.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleBuy = () => {
    if (!isAuthenticated) {
      setLoginDialogOpen(true);
    } else {
      navigate('/transaction', {
        state: {
          title: product.title,
          image: product.image,
          description: product.description,
          price: product.price,
          lotInfo: product.lotInfo,
          shippingInfo: product.shippingInfo
        }
      });
    }
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  if (!product) {
    return (
      <>
        <Typography variant="h6" gutterBottom>Продукт не найден</Typography>
        <Button variant="outlined" onClick={() => navigate('/')}>
          Вернуться на главную
        </Button>
      </>
    );
  }

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2, mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleBack}>
          Назад
        </Button>
      </Box>
      <Box sx={{ p: 2, border: '1px solid #ccc', maxWidth: 400, margin: 'auto' }}>
        <img src={product.image} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
        <Typography variant="h5" gutterBottom>{product.title}</Typography>
        <Typography variant="h6" gutterBottom>{product.description}</Typography>
        <Typography variant="h6" gutterBottom>Цена: {product.price} TON </Typography>
        <Select value={size} onChange={handleChangeSize} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem value="">Выберите размер</MenuItem>
          {/* <MenuItem value={'L'}>L</MenuItem> */}
          {/* <MenuItem value={'XL'}>XL</MenuItem> */}
        </Select>
        <Button variant="contained" color={!isAuthenticated ? 'secondary' : 'primary'} fullWidth sx={{ mt: 2 }} onClick={handleBuy}>
          КУПИТЬ
        </Button>
        <LoginDialog open={loginDialogOpen} onClose={() => setLoginDialogOpen(false)} />
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography>Описание</Typography></AccordionSummary>
          <AccordionDetails><Typography>{product.description}</Typography></AccordionDetails>
        </Accordion>
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography>Лот</Typography></AccordionSummary>
          <AccordionDetails><Typography>{product.lotInfo}</Typography></AccordionDetails>
        </Accordion>
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography>Доставка</Typography></AccordionSummary>
          <AccordionDetails><Typography>{product.shippingInfo}</Typography></AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}

export default ProductDetails;
