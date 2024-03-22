import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'

import Paper from '@mui/material/Paper'
import { useGetAllUsersQuery } from '../../../../../application/services/userAPi'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import TableHeadRow from '../table-head/TableHead'
import UserTableBody from '../table-body/UserTableBody'

const titles = [
  'First Name',
  'Last Name',
  'Job Area',
  'Email',
  'Created At'
]

export default function UserTable() {
  const { data: users, error, isLoading } = useGetAllUsersQuery()
  if (isLoading) return <CircularProgress color='primary' />
  if (error) return <div>error</div>

  return (
    <TableContainer component={Paper} aria-label="simple table">
      <Table>
        <TableHeadRow titles={titles} />
        <UserTableBody users={users!} />
      </Table>
    </TableContainer>
  )
}
