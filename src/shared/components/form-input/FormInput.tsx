import React from 'react';
import { FormGroup, InputLabel, Typography, TextField } from '@mui/material';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any; 
  error: boolean;
  errorMessage: string;
}

const FormInput: React.FC<FormInputProps> = ({ id, label, type, register, error, errorMessage }) => {
  
  return (
    <FormGroup sx={{ textAlign: 'left'}} >
      <InputLabel>{label}</InputLabel>
      <TextField
        {...register}
        id={id}
        placeholder={label}
        type={type}
        fullWidth
      />
      {error && <Typography color='error' variant='subtitle2'>{errorMessage}</Typography>}
    </FormGroup>
  );
};

export default FormInput;