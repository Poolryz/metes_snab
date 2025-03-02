import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Button } from '@mui/material'

function App() {

  return (
  <>
    <h1>Hello world</h1>
    <Button variant='contained' color='primary'>LOL</Button>
    <Routes>
      <Route path='/application' element='Application'/>
      <Route path='/application/:id' element='id'/>
      <Route path='/application/:id/edit' element='edit'/>
    </Routes>
  </>
    
  )
}

export default App
