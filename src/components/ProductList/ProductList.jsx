import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function ProductList() {
  const tempProducts = [
    { id: 1, title: 'Apple MacBook Pro', description: '16-inch, 16GB RAM', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Apple iPad Air', description: '10.9-inch, 256GB, Space Gray', image: 'path/to/image2.jpg' },
    { id: 3, title: 'Sony Headphones', description: 'Noise Cancelling, Wireless', image: 'path/to/image3.jpg' }
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {tempProducts.map((product, index) => (
        <Card key={index} style={{ margin: 10, width: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={product.title}
              height="140"
              image={product.image}
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
