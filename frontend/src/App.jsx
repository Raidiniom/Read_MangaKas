import { Route, Routes } from 'react-router-dom'
import Landing_page from './components/Landing_Page'
import Register_Page from './components/Register_page'
import Login_Page from './components/Login_page'
import Browse_page from './components/Browse_page'

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
