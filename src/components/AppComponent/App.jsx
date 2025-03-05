import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { data } from '../../utils/data'
import CreateApplicationPage from '../../pages/CreateApplicationPage/CreateApplicationPage.jsx'
import ListApplicationPage from '../../pages/ListApplicationPage/ListApplicationPage.jsx'
import ItemApplicationComponent from '../../pages/ItemApplicationComponent/ItemApplicationComponent.jsx'

function App () {
  function heandlerSendData (
    valueTitle,
    valueUser,
    valueStatus,
    fileInvoices = [],
    filePayment = [],
    filePeceipt = []
  ) {
    const formData = new FormData()
    formData.append('fileInvoices',fileInvoices)
    
    const send = fetch('http://localhost:3000/api', {
      method: 'POST',
      body:formData
    })
    send.then(data => {
      return console.log(data)
    })
    let obj = {
      id: 2,
      title: valueTitle,
      responsible: valueUser,
      status: valueStatus
    }
    data.push(obj)
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
        <Route path='/application/:id' element={<ItemApplicationComponent />} />
        <Route path='/application/:id/edit' element='edit' />
      </Routes>
    </div>
  )
}

export default App
