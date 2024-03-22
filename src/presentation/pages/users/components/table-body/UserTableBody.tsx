import {  TableBody, TableRow, TableCell, Typography } from "@mui/material";
import { User } from "../../../../../domain/User";
import DeleteUser from "../../../../../shared/components/delete-user/DeleteUser";

interface TableProps {
    users: User[];
  }
const UserTableBody: React.FC<TableProps> = ({ users }) => {
    return (
      <TableBody >
        {users?.map((user) => (
          <TableRow key={user.id}>
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
                {user.jobArea}
              </Typography>
            </TableCell>
            <TableCell align='left'>
              <Typography variant='subtitle2' color='text'>
                {user.email}
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
    );
  };
  
  export default UserTableBody;