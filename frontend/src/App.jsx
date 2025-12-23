import { Link, Route, Routes } from 'react-router-dom'
import Landing_page from './pages/Landing_page'
import Register_Page from './pages/Register_page'
import Login_Page from './pages/Login_page'
import Browse_page from './pages/Browse_page'
import Profile_page from './pages/Profile_page'
import Manga_Page from './pages/Manga_page'
import Settings_page from './pages/Settings_page'
import Chapter_page from './pages/Chapter_page'
import Author_page from './pages/Author_page'

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
        <Link to="/settings">Settings</Link> |{" "}
        <Link to="/manga/:title">Manga</Link> |{" "}
        <Link to="/manga/:title/chapter/:chapterNumber">Chapter</Link> |{" "}
      </div>
      
      <Routes>
        <Route path='/' element={<Landing_page />} />
        <Route path='/register' element={<Register_Page />} />
        <Route path='/login' element={<Login_Page />} />
        <Route path='/browse' element={<Browse_page />} />
        <Route path='/profile' element={<Profile_page />} />
        <Route path='/settings' element={<Settings_page />} />
        <Route path='/manga/:title' element={<Manga_Page />} />
        <Route path='/manga/:title/chapter/:chapterNumber' element={<Chapter_page />} />
        <Route path='/author/:authorName' element={<Author_page />} />
      </Routes>
    </>
  )
}

export default App
