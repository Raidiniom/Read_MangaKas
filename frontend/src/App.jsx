import { Route, Routes } from 'react-router-dom'
import Landing_page from './pages/Landing_page'
import Register_Page from './pages/Register_page'
import Login_Page from './pages/Login_page'
import Browse_page from './pages/Browse_page'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing_page />} />
      <Route path='/register' element={<Register_Page />} />
      <Route path='/login' element={<Login_Page />} />
      <Route path='/browse' element={<Browse_page />} />
    </Routes>
  )
}

export default App
