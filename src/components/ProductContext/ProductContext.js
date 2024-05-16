import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products] = useState([
        { id: 1, title: 'Apple MacBook Pro', description: '16-inch, 16GB RAM', image: '/img/mbp16-spacegray-gallery1-202110-1397x1397.jpg', lotInfo: 'Лот #123456, доступно 5 штук', shippingInfo: 'Доставка в течение 3-5 рабочих дней', price: 2400, category: 'Ноутбук' },
        { id: 2, title: 'Apple iPad Air', description: '10.9-inch, 256GB, Space Gray', image: '/img/img_0_1112_2554_0_1_KWMuV2.jpg', lotInfo: 'Лот #234567, доступно 3 штуки', shippingInfo: 'Бесплатная доставка', price: 700, category: 'Планшет' },
        { id: 3, title: 'Sony Headphones', description: 'Noise Cancelling, Wireless', image: '/img/100_1.jpg', lotInfo: 'Лот #345678, доступно 10 штук', shippingInfo: 'Доставка за 1 день, платно', price: 260, category: 'Наушники' },
        { id: 4, title: 'Samsung Galaxy S22 Ultra', description: '6.8-inch Dynamic AMOLED, 12GB RAM, 256GB Storage, Phantom Black', image: '/img/sm-s928_galaxys24ultra_front_titaniumblack_231109_result.jpg', lotInfo: 'Лот #789012, доступно 10 штук', shippingInfo: 'Бесплатная экспресс доставка', price: 1050, category: 'моб.Телефон' },
        { id: 5, title: 'Google Pixel 6', description: '6.4-inch AMOLED, 8GB RAM, 128GB Storage, Sorta Seafoam', image: '/img/5-1397x1397.jpg', lotInfo: 'Лот #543210, доступно 8 штук', shippingInfo: 'Доставка 2-3 рабочих дня', price: 800, category: 'моб.Телефон' },
        { id: 6, title: 'Dell XPS 13', description: '13.4-inch FHD+, Intel Core i7, 16GB RAM, 512GB SSD', image: '/img/41K3gWFID6L._AC_UF1000,1000_QL80_.jpg', lotInfo: 'Лот #654321, доступно 5 штук', shippingInfo: 'Стандартная доставка', price: 1200, category: 'Ноутбук' },
        { id: 7, title: 'Bose QuietComfort Earbuds', description: 'Noise Cancelling, Wireless, Triple Black', image: '/img/382915326.jpg', lotInfo: 'Лот #765432, доступно 15 штук', shippingInfo: 'Быстрая доставка', price: 290, category: 'Наушники' },
        { id: 8, title: 'Fitbit Charge 5', description: 'Fitness and Wellness Tracker, Black', image: '/img/417367540.jpg', lotInfo: 'Лот #876543, доступно 20 штук', shippingInfo: 'Доставка на следующий день', price: 200, category: 'Прочие' },
        { id: 9, title: 'Canon EOS R5', description: 'Full-Frame Mirrorless Camera, 45MP, 8K Video', image: '/img/87_600.jpg', lotInfo: 'Лот #987654, доступно 4 штуки', shippingInfo: 'Доставка 5-7 рабочих дней', price: 3500, category: 'Фото Камера' },
        { id: 10, title: 'NVIDIA GeForce RTX 3080', description: '10GB GDDR6X, Ray Tracing, 320-bit Memory Bus, PCI Express 4.0', image: '/img/b3080_web_tv8w.jpg', lotInfo: 'Лот #101010, доступно 7 штук', shippingInfo: 'Экспресс-доставка за 1-2 дня', price: 1500, category: 'Видеокарта' }
    ]);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);
