import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface FormButtonProps {
  onClick: () => void,
  disabled?: boolean
}

const FormButton: React.FC<FormButtonProps> = ({ onClick, disabled }) => {

  return (
    <Box display='flex' gap={2} justifyContent='flex-end'>
      <Link to={'/users'}>
        <Button variant='outlined' >Cancel</Button>
      </Link>
      <Button variant='contained' onClick={onClick} disabled={disabled}>Register</Button>
    </Box>
  )
}

export default FormButton
