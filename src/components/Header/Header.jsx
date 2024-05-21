import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Login from '../Login/Login';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Хук для навигации

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawer}>
          <MenuIcon />
        </IconButton>
        <Box
          component="img"
          src="/img/Screenshot_299.png" // Замените на путь к вашему изображению
          alt="Мой Маркетплейс"
          sx={{ flexGrow: 1, cursor: 'pointer', height: '50px', width: '100px', marginLeft: '5px', marginRight: '5px'}} // Подберите нужную высоту для вашего изображения
          onClick={handleHomeClick}
        />
        <Login />
      </Toolbar>
      <Drawer open={open} onClose={handleDrawer}>
        <List>
          <ListItem button onClick={() => handleLinkClick('/support')}>
            <ListItemText primary="Поддержка" />
          </ListItem>
          <ListItem button onClick={() => handleLinkClick('/faq')}>
            <ListItemText primary="FAQ" />
          </ListItem>
        </List>
        <Divider />
        {/* Дополнительные ссылки или содержимое */}
      </Drawer>
    </AppBar>
  );
}

export default Header;
