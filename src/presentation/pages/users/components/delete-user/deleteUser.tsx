import { Button, Typography } from '@mui/material'
import { useDeleteUserMutation } from '../../../../../application/services/userAPi'
import DeleteIcon from '@mui/icons-material/Delete'

export default function DeleteUser(prop: { id: string }) {
  const [deleteUser] = useDeleteUserMutation()
  return (
    <Button
      onClick={() => deleteUser(prop.id)}
      variant='contained'
      color='error'
      size='small'
    >
      <DeleteIcon color='secondary' />
      <Typography variant='subtitle2' color='secondary'>
        Delete
      </Typography>
    </Button>
  )
}
