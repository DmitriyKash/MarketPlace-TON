import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

function ProductList({ products }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product, index) => (
        <Card key={index} style={{ margin: 10, width: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image={product.image}
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
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
