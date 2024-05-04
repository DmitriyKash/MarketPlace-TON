import React, { useState } from 'react';
import { Button, Typography, Select, MenuItem, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ProductDetails() {
  const [size, setSize] = useState('');

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <Box sx={{ p: 2, border: '1px solid #ccc', maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Light Grey T-Shirt
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Yeezy x GAP
      </Typography>
      <Typography variant="h6" gutterBottom>
        7.3 TON (~3 849 p)
      </Typography>
      <Typography gutterBottom>
        Выберите размер:
        <Select
          value={size}
          onChange={handleChangeSize}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'L'}>L</MenuItem>
          <MenuItem value={'XL'}>XL</MenuItem>
        </Select>
      </Typography>
      <Button variant="contained" color="primary" fullWidth>
        КУПИТЬ
      </Button>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        @SPECIAL.OFFER
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Описание</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Детальное описание товара...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Лот</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Информация о лоте...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Доставка</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Информация о доставке...
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default ProductDetails;
