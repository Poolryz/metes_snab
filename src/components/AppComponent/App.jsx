import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { data } from '../../utils/data'
import CreateApplicationPage from '../../pages/CreateApplicationPage/CreateApplicationPage.jsx'
import ListApplicationPage from '../../pages/ListApplicationPage/ListApplicationPage.jsx'
import ItemApplicationComponent from '../../pages/ItemApplicationComponent/ItemApplicationComponent.jsx'

function App() {
  function heandlerSendData(
    valueTitle,
    valueUser,
    valueStatus,
    numberInvoise,
    dateInvoise,
    fileInvoices = [],
    numberPayment,
    datePayment,
    filePayment = [],
    numberReceipt,
    dateReceipt,
    fileReceipt = []
  ) {
    fetch('http://localhost:5000/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: valueTitle,
        responsible: valueUser,
        status: valueStatus,
        invoices: {
          number: numberInvoise,
          date: dateInvoise,
        },
        payment: {
          number: numberPayment,
          date: datePayment
        },
        receipt: {
          number: numberReceipt,
          date: dateReceipt
        }
      })
    });
  }

  return (
    <div className='_container'>
      <h1>Снабжение</h1>
      <nav>
        <Link
          component={RouterLink}
          marginRight={10}
          fontSize={20}
          color='primary'
          underline='hover'
          to='/application/new'
        >
          Создание новой заявки
        </Link>
        <Link
          component={RouterLink}
          fontSize={20}
          color='primary'
          underline='hover'
          to='/application'
        >
          Список заявок
        </Link>
      </nav>
      <Routes>
        <Route
          path='/application/new'
          element={
            <CreateApplicationPage heandlerSendData={heandlerSendData} />
          }
        />
        <Route
          path='/application'
          element={<ListApplicationPage data={data} />}
        />
        <Route path='/application/:id' element={<ItemApplicationComponent data={data} />} />
        <Route path='/application/:id/edit' element='edit' />
      </Routes>
    </div>
  )
}

export default App
