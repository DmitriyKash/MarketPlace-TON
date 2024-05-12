
import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products] = useState([
        { id: 1, title: 'Apple MacBook Pro', description: '16-inch, 16GB RAM', image: 'path/to/image1.jpg', lotInfo: 'Лот #123456, доступно 5 штук', shippingInfo: 'Доставка в течение 3-5 рабочих дней' },
        { id: 2, title: 'Apple iPad Air', description: '10.9-inch, 256GB, Space Gray', image: 'path/to/image2.jpg', lotInfo: 'Лот #234567, доступно 3 штуки', shippingInfo: 'Бесплатная доставка' },
        { id: 3, title: 'Sony Headphones', description: 'Noise Cancelling, Wireless', image: 'path/to/image3.jpg', lotInfo: 'Лот #345678, доступно 10 штук', shippingInfo: 'Доставка за 1 день, платно' },
        { 
            id: 4, 
            title: 'Samsung Galaxy S22 Ultra', 
            description: '6.8-inch Dynamic AMOLED, 12GB RAM, 256GB Storage, Phantom Black', 
            image: 'path/to/image4.jpg',
            lotInfo: 'Лот #789012, доступно 10 штук',
            shippingInfo: 'Бесплатная экспресс доставка'
          }, 
    ]);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);