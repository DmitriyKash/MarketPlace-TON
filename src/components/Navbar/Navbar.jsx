import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
// import { TonConnectButton } from '@tonconnect/ui-react';
import Login from '../Login/Login'; // Убедитесь, что путь корректен

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarBrand}>Marketplace</div>
            <div className={styles.navbarLinks}>
                <Link to="/">Home</Link>
            </div>
            <Login />
        </nav>
    );
};

export default Navbar;
