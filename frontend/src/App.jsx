import { Link, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import BrowsePage from './pages/BrowsePage'
import ProfilePage from './pages/ProfilePage'
import MangaPage from './pages/MangaPage'
import ChapterPage from './pages/ChapterPage'
import AuthorPage from './pages/AuthorPage'
import TagPage from './pages/TagPage'

function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/browse">Browse</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
      </div>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/browse' element={<BrowsePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/manga/:title' element={<MangaPage />} />
        <Route path='/manga/:title/chapter/:lang/:chapterNumber' element={<ChapterPage />} />
        <Route path='/author/:authorName' element={<AuthorPage />} />
        <Route path='/tag/:tag' element={<TagPage />} />
      </Routes>
    </>
  )
}

export default App