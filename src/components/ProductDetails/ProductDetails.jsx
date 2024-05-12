import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Select, MenuItem, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../Header/Header';
import LoginDialog from '../LoginDialog/LoginDialog'; // Импортируйте LoginDialog
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


  const handleBuy = () => {
    if (!isAuthenticated) {
        setLoginDialogOpen(true);
    } else {
        // Перенаправление на страницу транзакции
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
    return <Typography>Продукт не найден</Typography>;
  }

  return (
    <>
      <Header />
      <Box sx={{ p: 2, border: '1px solid #ccc', maxWidth: 400, margin: 'auto' }}>
        <Typography gutterBottom>{product.image}</Typography>
        <Typography variant="h5" gutterBottom>{product.title}</Typography>
        <Typography variant="h6" gutterBottom>{product.description}</Typography>
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
