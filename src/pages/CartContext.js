import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(currentCart => {
            const itemExists = currentCart.find(item => item.id === product.id);
            if (itemExists) {
                return currentCart.map(item => 
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                );
            }
            return [...currentCart, {...product, quantity: 1}];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(currentCart => currentCart.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
