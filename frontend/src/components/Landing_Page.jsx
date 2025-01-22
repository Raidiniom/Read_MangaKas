import './styles/landing.css'
import { Link } from 'react-router-dom';

export default function Landing_Page() {
    
    return (
        <>
          <div className='landing-header'>
            <Link to='/'><h1 className='landing-title'>Read_MangaKas</h1></Link>
            <div className="routes">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/register'><button>Register</button></Link>
            </div>
          </div>

          <div className='landing-body'>
            {/* displays top rated mangas being reed all time on the site */}
            <div className='top-manga-display'></div>
          </div>
        </>
    )
}