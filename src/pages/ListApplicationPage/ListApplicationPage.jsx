import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'

export default function ListApplicationPage({ data }) {
  const tableHead = [
    '№',
    'Название',
    'Дата',
    'Статус',
    'Ответственный',
    '№ Счета',
    '№ Платежки',
    '№ УПД'
  ]
  const navigate = useNavigate()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {tableHead.map(item => {
              return <TableCell key={item}>{item}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow
              onClick={() => {
                navigate(`/application/${item.id}`)
              }}
              key={item.id}
            >
              <TableCell>1</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell align='right'>{item.date}</TableCell>
              <TableCell align='right'>{item.status}</TableCell>
              <TableCell align='right'>{item.responsible}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
