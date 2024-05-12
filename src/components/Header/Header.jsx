import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Login from '../Login/Login';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

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
    setOpen(false); // Закрыть Drawer после выбора
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
