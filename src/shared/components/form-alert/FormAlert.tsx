import React from 'react'
import { Alert } from '@mui/material'
import { theme } from '../../theme'

interface FormAlertProps {
  open: boolean
  onClose: () => void
}

const FormAlert: React.FC<FormAlertProps> = ({ open, onClose }) => {
  return (
    open && (
      <Alert
        sx={{
          width: theme.spacing(30),
          position: 'absolute',
          top: '10px',
          right: '10px'
        }}
        severity='success'
        onClose={onClose}
      >
        User created successfully!
      </Alert>
    )
  )
}

export default FormAlert
