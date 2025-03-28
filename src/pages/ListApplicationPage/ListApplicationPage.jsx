import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export default function ListApplicationPage({ data }) {

  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/applications', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setApplications(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }; fetchData();
  }, [loading]);

  console.log('render');


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

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return (
      <Alert severity="error" sx={{ margin: 2 }}>
        Ошибка при загрузке данных: {error}
      </Alert>
    );
  }

  function funcDateChange(serverDate) {
    let i = serverDate.split('T')
    return i[0].split('-').reverse().join('.')
  }

  const funcDeleteApplication = async (id) => {
    try {
      setLoading(true)
      const response = await fetch(`http://localhost:5000/api/applications/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка удаления:', error.response?.data || error.message);
      throw error;
    } finally {
      setLoading(false)
    }
  };


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
          {applications.map((item, index) => (
            <TableRow
              onClick={() => {
                navigate(`/application/${item._id}`)
                // funcDeleteApplication(item._id)
              }
              }
              style={{ cursor: 'pointer' }}
              key={item._id}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell align='left'>{funcDateChange(item.date)}</TableCell>
              <TableCell align='left'>{item.status}</TableCell>
              <TableCell align='left'>{item.responsible}</TableCell>
              <TableCell align='left'>{item.invoices?.number}</TableCell>
              <TableCell align='left'>{item.payment?.number}</TableCell>
              <TableCell align='left'>{item.receipt?.number}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
