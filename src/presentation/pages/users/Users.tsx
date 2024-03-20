
import { Box, Typography } from '@mui/material'
import UserTable from '../../../shared/components/userList/userTable'
import { useStyles } from './UsersStyle'
export default function User() {
  const classes = useStyles()
  return (
    <>
      <Typography variant='h1' className={classes.title}>All Users</Typography>
      <Box>
        
        <UserTable/>
      </Box>
    </>
  )
}
