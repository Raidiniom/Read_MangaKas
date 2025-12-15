import { Link, Route, Routes } from 'react-router-dom'
import Landing_page from './pages/Landing_page'
import Register_Page from './pages/Register_page'
import Login_Page from './pages/Login_page'
import Browse_page from './pages/Browse_page'

function App() {

  return (
    <>
      <div>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/browse">Browse</Link>
      </div>
      
      <Routes>
        <Route path='/' element={<Landing_page />} />
        <Route path='/register' element={<Register_Page />} />
        <Route path='/login' element={<Login_Page />} />
        <Route path='/browse' element={<Browse_page />} />
      </Routes>
    </>
  )
}

export default App
