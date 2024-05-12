import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

function LoginDialog({ open, onClose, onLogin }) {
  return (
    <Dialog open={open} onClose={onClose} PaperProps={{
        style: { backgroundColor: '#ffcccc' } // Легкий красный фон для всего диалога
      }}>
      <DialogTitle style={{ color: 'white', backgroundColor: 'red' }}>Вход в систему</DialogTitle>
      <DialogContent>Пожалуйста, войдите через "Connect Wallet", чтобы продолжить покупку.</DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{ color: 'red' }}>Отмена</Button>
        {/* <Button onClick={onLogin} color="primary" style={{ color: 'white' }}>Войти</Button> */}
      </DialogActions>
    </Dialog>
  );
}

export default LoginDialog;
