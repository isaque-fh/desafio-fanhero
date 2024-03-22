import { TableCell, TableHead, Typography } from '@mui/material'
interface TableHead {
  titles: string[]
}
const TableHeadRow: React.FC<TableHead> = ({ titles }) => {
  return (
    <TableHead>
      {titles?.map((title, index) => (
        <TableCell key={index}>
          <Typography variant='subtitle1' color='black'>
            {title}
          </Typography>
        </TableCell>
      ))}
    </TableHead>
  )
}

export default TableHeadRow
