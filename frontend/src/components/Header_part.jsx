import '../styles/header_part.css'
import { Link } from 'react-router-dom';
import Button_login from './Button_login';
import Button_register from './Button_register';

const Header_part = () => {
    
    return (
        <div className='landing-header'>
            <div className='title-container'><Link to='/'><h1>Read_MangaKas</h1></Link></div>
            <div className='routes-container'>
                <Link to='/login'><Button_login /></Link>
                <Link to='/register'><Button_register /></Link>
            </div>
          </div>
    )
}

export default Header_part