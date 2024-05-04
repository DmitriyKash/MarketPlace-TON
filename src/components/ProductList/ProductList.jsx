import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const products = [
    { id: 1, title: 'Apple MacBook Pro', description: '16-inch, 16GB RAM', price: 2399 },
    { id: 2, title: 'Apple iPad Air', description: '10.9-inch, 256GB, Space Gray', price: 749 },
    { id: 3, title: 'Sony Headphones', description: 'Noise Cancelling, Wireless', price: 278 }
  ];

function ProductList({ products }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product, index) => (
        <Card key={index} style={{ margin: 10, width: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={product.title} // Замените 'name' на 'title', если ваши объекты продуктов используют 'title'
              height="140"
              image={product.image} // Убедитесь, что свойство 'image' существует в объектах продукта
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default ProductList;
