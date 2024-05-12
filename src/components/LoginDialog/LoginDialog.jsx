import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TonConnectButton } from '@tonconnect/ui-react'; // Импорт кнопки TON Connect

function LoginDialog({ open, onClose, onAuthentication }) {
  const handleAuthentication = (isLoggedIn, userData) => {
    onAuthentication(isLoggedIn, userData);
    onClose(); // Закрыть диалог после аутентификации
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="connect-wallet-dialog-title">
      <DialogTitle id="connect-wallet-dialog-title">Пожалуйста, подключите кошелек</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Ваш кошелек не подключен. Чтобы совершать покупки, необходимо его подключить.
        </Typography>
        <TonConnectButton 
          onLogin={(userData) => handleAuthentication(true, userData)}
          onLogout={() => handleAuthentication(false, null)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Закрыть</Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginDialog;
