import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function LoginDialog({ open, onClose, onConnect }) {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="connect-wallet-dialog-title">
      <DialogTitle id="connect-wallet-dialog-title">Пожалуйста, подключите кошелек</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Ваш кошелек не подключен. Чтобы совершать покупки, необходимо его подключить.
        </Typography>
        <Button variant="contained" color="secondary" onClick={onConnect} style={{ marginTop: 20 }}>
          Подключить кошелек
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Закрыть</Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginDialog;
