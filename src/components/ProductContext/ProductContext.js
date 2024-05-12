import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products] = useState([
        { id: 1, title: 'Apple MacBook Pro', description: '16-inch, 16GB RAM', image: 'path/to/image1.jpg', lotInfo: 'Лот #123456, доступно 5 штук', shippingInfo: 'Доставка в течение 3-5 рабочих дней' },
        { id: 2, title: 'Apple iPad Air', description: '10.9-inch, 256GB, Space Gray', image: 'path/to/image2.jpg', lotInfo: 'Лот #234567, доступно 3 штуки', shippingInfo: 'Бесплатная доставка' },
        { id: 3, title: 'Sony Headphones', description: 'Noise Cancelling, Wireless', image: 'path/to/image3.jpg', lotInfo: 'Лот #345678, доступно 10 штук', shippingInfo: 'Доставка за 1 день, платно' },
        { id: 4, title: 'Samsung Galaxy S22 Ultra', description: '6.8-inch Dynamic AMOLED, 12GB RAM, 256GB Storage, Phantom Black', image: 'path/to/image4.jpg', lotInfo: 'Лот #789012, доступно 10 штук', shippingInfo: 'Бесплатная экспресс доставка' },
        { id: 5, title: 'Google Pixel 6', description: '6.4-inch AMOLED, 8GB RAM, 128GB Storage, Sorta Seafoam', image: 'path/to/image5.jpg', lotInfo: 'Лот #543210, доступно 8 штук', shippingInfo: 'Доставка 2-3 рабочих дня' },
        { id: 6, title: 'Dell XPS 13', description: '13.4-inch FHD+, Intel Core i7, 16GB RAM, 512GB SSD', image: 'path/to/image6.jpg', lotInfo: 'Лот #654321, доступно 5 штук', shippingInfo: 'Стандартная доставка' },
        { id: 7, title: 'Bose QuietComfort Earbuds', description: 'Noise Cancelling, Wireless, Triple Black', image: 'path/to/image7.jpg', lotInfo: 'Лот #765432, доступно 15 штук', shippingInfo: 'Быстрая доставка' },
        { id: 8, title: 'Fitbit Charge 5', description: 'Fitness and Wellness Tracker, Black', image: 'path/to/image8.jpg', lotInfo: 'Лот #876543, доступно 20 штук', shippingInfo: 'Доставка на следующий день' },
        { id: 9, title: 'Canon EOS R5', description: 'Full-Frame Mirrorless Camera, 45MP, 8K Video', image: 'path/to/image9.jpg', lotInfo: 'Лот #987654, доступно 4 штуки', shippingInfo: 'Доставка 5-7 рабочих дней' },
        { 
            id: 10, 
            title: 'NVIDIA GeForce RTX 3080', 
            description: '10GB GDDR6X, Ray Tracing, 320-bit Memory Bus, PCI Express 4.0', 
            image: 'path/to/image10.jpg', 
            lotInfo: 'Лот #101010, доступно 7 штук', 
            shippingInfo: 'Экспресс-доставка за 1-2 дня' 
        }
        
    ]);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);
