import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia'; // Импорт для отображения медиаконтента

function LoginDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="connect-wallet-dialog-title">
      <DialogTitle id="connect-wallet-dialog-title">Пожалуйста, подключите кошелек</DialogTitle>
      <DialogContent dividers>
        <CardMedia
          component="img"
          alt="Инструкция по подключению кошелька"
          height="auto"
          image="/img/login.png"
        />
        <p>Следуйте инструкциям, чтобы подключить ваш кошелек.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Закрыть</Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginDialog;
