import { Route, Routes } from 'react-router-dom'
import Landing_Page from './components/Landing_Page'
import Register_Page from './components/Register_Page'
import Login_Page from './components/Login_Page'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing_Page />} />
      <Route path='/register' element={<Register_Page />} />
      <Route path='/login' element={<Login_Page />} />
    </Routes>
  )
}

export default App
