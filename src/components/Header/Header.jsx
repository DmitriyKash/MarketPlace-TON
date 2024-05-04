import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Login from '../Login/Login';

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Хук для навигации

  const handleDrawer = () => {
    setOpen(!open);
  };

  // Функция для перенаправления на домашнюю страницу
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, cursor: 'pointer' }} onClick={handleHomeClick}>
          Мой Маркетплейс
        </Typography>
        <Login />
      </Toolbar>
      <Drawer open={open} onClose={handleDrawer}>
        {/* Содержимое вашего Drawer */}
      </Drawer>
    </AppBar>
  );
}

export default Header;
