import React from 'react';
import { Alert } from '@mui/material';
import { theme } from '../../theme';

interface FormAlertProps {
  open: boolean;
  onClose: () => void;
}

const FormAlert: React.FC<FormAlertProps> = ({ open, onClose }) => {
  return (
    open && (
        <Alert sx={{ width: theme.spacing(30),position: 'absolute', top: '10px', right: '10px' }} severity="success" onClose={onClose}>
          Usuário criado com sucesso!
        </Alert>
      )
  );
};

export default FormAlert;