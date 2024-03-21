
import { Box, Typography } from '@mui/material'
import UserTable from '../../../shared/components/user-list/userTable'
import { useStyles } from './UsersStyle'
export default function User() {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.content}>
        <Typography variant='h1' className={classes.title}>Users</Typography> 
        <Box>
          <UserTable/>
        </Box>
      </Box>
    </>
  )
}