import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { TonConnectButton } from '@tonconnect/ui-react';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarBrand}>Marketplace</div>
            <div className={styles.navbarLinks}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <TonConnectButton />
        </nav>
    );
};

export default Navbar;
