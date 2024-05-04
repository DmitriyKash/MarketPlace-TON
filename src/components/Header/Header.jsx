import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

function Header() {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Мой Маркетплейс</Link>
        </Typography>
        <Login />
      </Toolbar>
      <Drawer open={open} onClose={handleDrawer}>
        {/* Содержимое меню */}
      </Drawer>
    </AppBar>
  );
}

export default Header;
