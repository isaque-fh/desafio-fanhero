import React from 'react';
import { FormGroup, InputLabel, Input } from '@mui/material';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  register: any; 
  error: boolean;
  errorMessage: string;
}

const FormInput: React.FC<FormInputProps> = ({ id, label, type, register, error, errorMessage }) => {
  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      <Input
        {...register}
        id={id}
        placeholder={label}
        type={type}
      />
      {error && <p>{errorMessage}</p>}
    </FormGroup>
  );
};

export default FormInput;