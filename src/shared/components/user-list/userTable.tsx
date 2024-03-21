/* eslint-disable react-hooks/rules-of-hooks */

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'

import Paper from '@mui/material/Paper'
import { useGetAllUsersQuery } from '../../../application/services/userAPi'
import { TableRow, Typography } from '@mui/material'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import DeleteUser from '../delete-user/deleteUser'

export default function UserTable() {
  const { data: users,error, isLoading } = useGetAllUsersQuery()
  if (isLoading) return <CircularProgress color='primary' />
  if (error) return <div>error</div>

  return (
    <TableContainer component={Paper}>
      <Table width='100%' size='small'>
        <TableHead>
          <TableRow>
            <TableCell>
            <Typography variant='h3' color='black'>
                Id
              </Typography>
            </TableCell>
            <TableCell align='left' color='text'>
              <Typography variant='h3' color='black'>
                First Name
              </Typography>
            </TableCell>
            <TableCell align='left'>
              <Typography variant='h3' color='black'>
                Last Name
              </Typography>
            </TableCell>
            <TableCell align='left'>
              <Typography variant='h3' color='black'>
                Email
              </Typography>
            </TableCell>
            <TableCell align='left'>
              <Typography variant='h3' color='text'>
                Job Area
              </Typography>
            </TableCell>
            <TableCell align='left'>
              <Typography variant='h3' color='black'>
                Created At
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>
                <Typography variant='subtitle2' color='text'>
                 {user.id}
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography variant='subtitle2' color='text'>
                {user.firstName}
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography variant='subtitle2' color='text'>
                {user.lastName}
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography variant='subtitle2' color='text'>
                {user.email}
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography variant='subtitle2' color='text'>
                {user.jobArea}
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography variant='subtitle2' color='text'>
                {user.createdAt.toString().slice(0, 10)}
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <DeleteUser id={user.id}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
