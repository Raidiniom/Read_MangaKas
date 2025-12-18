import { Link, Route, Routes } from 'react-router-dom'
import Landing_page from './pages/Landing_page'
import Register_Page from './pages/Register_page'
import Login_Page from './pages/Login_page'
import Browse_page from './pages/Browse_page'
import Profile_page from './pages/Profile_page'
import Manga_Page from './pages/Manga_page'

function App() {

  return (
    <>
      {/* Comment this div out if this is in production */}
      <div>
         |{" "}
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/browse">Browse</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/manga">Manga</Link> |{" "}
      </div>
      
      <Routes>
        <Route path='/' element={<Landing_page />} />
        <Route path='/register' element={<Register_Page />} />
        <Route path='/login' element={<Login_Page />} />
        <Route path='/browse' element={<Browse_page />} />
        <Route path='/profile' element={<Profile_page />} />
        <Route path='/manga/:manga_uuid' element={<Manga_Page />} />
      </Routes>
    </>
  )
}

export default App
