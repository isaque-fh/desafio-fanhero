/* eslint-disable react-hooks/rules-of-hooks */


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import Paper from '@mui/material/Paper';
import { useGetAllUsersQuery } from '../../../application/services/userAPi';
import { TableRow, Typography } from '@mui/material';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { grey } from '@mui/material/colors';


export default function UserTable() {
  const { data: users,error, isLoading } = useGetAllUsersQuery()
  //const [deleteUser] = useDeleteUserMutation()
  if (isLoading) return <CircularProgress color="primary" />;
  if(error) return <div>{(error as Error).message}</div>

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{ backgroundColor:grey[500] }} >
          <TableRow >
            <TableCell >Id</TableCell>
            <TableCell align="left" color='primary'>
              <Typography variant='subtitle1' color='primary' >
                Name
                </Typography>
            </TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Job Area</TableCell>
            <TableCell align="left">Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="user">
                {user.id}
              </TableCell>
              <TableCell align="left">{user.firstName}</TableCell>
              <TableCell align="left">{user.lastName }</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="left">{user.jobArea}</TableCell>
              <TableCell align="left">{user.createdAt.toString()}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}