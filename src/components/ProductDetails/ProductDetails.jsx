import React, { useState, useNavigate } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography, Select, MenuItem, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../Header/Header';
import LoginDialog from '../LoginDialog/LoginDialog'; // Импортируйте LoginDialog
import { useAuth } from '../AuthContext/AuthContext';


function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [size, setSize] = useState('');
  const { isAuthenticated } = useAuth();
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  const tempProducts = [
    { id: 1, title: 'Apple MacBook Pro', description: '16-inch, 16GB RAM', image: 'path/to/image1.jpg', lotInfo: 'Лот #123456, доступно 5 штук', shippingInfo: 'Доставка в течение 3-5 рабочих дней' },
    { id: 2, title: 'Apple iPad Air', description: '10.9-inch, 256GB, Space Gray', image: 'path/to/image2.jpg', lotInfo: 'Лот #234567, доступно 3 штуки', shippingInfo: 'Бесплатная доставка' },
    { id: 3, title: 'Sony Headphones', description: 'Noise Cancelling, Wireless', image: 'path/to/image3.jpg', lotInfo: 'Лот #345678, доступно 10 штук', shippingInfo: 'Доставка за 1 день, платно' }
  ];

  const product = tempProducts.find(p => p.id.toString() === id);
  const handleBuy = () => {
    if (!isAuthenticated) {
        setLoginDialogOpen(true);
    } else {
        // Перенаправление на страницу транзакции
        navigate('/transaction', {
            state: {
                title: product.title,
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
        <Typography variant="h5" gutterBottom>{product.title}</Typography>
        <Typography variant="h6" gutterBottom>{product.description}</Typography>
        <Select value={size} onChange={handleChangeSize} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem value="">Выберите размер</MenuItem>
          <MenuItem value={'L'}>L</MenuItem>
          <MenuItem value={'XL'}>XL</MenuItem>
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
