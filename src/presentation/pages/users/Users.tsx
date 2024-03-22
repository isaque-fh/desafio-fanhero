import { Box, Paper, Table, TableContainer, Typography } from '@mui/material'
import UserTableBody from './components/table-body/UserTableBody'
import TableHeadRow from './components/table-head/TableHead'
import { CircularProgress } from '@material-ui/core'
import useUsers from './hooks/UseFetchUsers'
export default function User() {

  const { users, isLoading,classes,titles } = useUsers()

  if (isLoading) return <CircularProgress color='primary' />
  return (
    <>
      <Box className={classes.content}>
        <Typography variant='h1' className={classes.title}>
          Users
        </Typography>
        <Box>
          <TableContainer component={Paper} aria-label='simple table'>
            <Table>
              <TableHeadRow titles={titles} />
              <UserTableBody users={users!} />
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  )
}