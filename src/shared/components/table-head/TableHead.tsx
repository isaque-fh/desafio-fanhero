import { TableCell, TableHead, Typography } from '@mui/material'
interface MyComponentProps {
  titles: string[]
}
const TableHeadRow: React.FC<MyComponentProps> = ({ titles }) => {
  return (
    <TableHead>
      {titles?.map((title, index) => (
        <TableCell key={index}>
          <Typography variant='h3' color='black'>
            {title}
          </Typography>
        </TableCell>
      ))}
    </TableHead>
  )
}

export default TableHeadRow
