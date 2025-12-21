import '../styles/header_part.css'
import { Link } from 'react-router-dom';
import Button from './Button';

const Header_part = () => {

    const isLoggedIn = (sessionID) => {
        if (sessionID !== null) {
            return true;
        }

        return false;
    }
    
    return (
        <div className='landing-header'>
            <div className='title-container'>
                <Link to='/'><h1>Read_MangaKas</h1></Link>
            </div>
            
            <div className='routes-container'>
                {isLoggedIn(null) ? 
                    <Link to='/profile'><img src="/profile_button.png" alt="profile" /></Link>
                :
                    <>
                        <Link to='/login'><Button name="login" onClick={null} /></Link>
                        <Link to='/register'><Button name="register" onClick={null} /></Link>
                    </>
                    }
            </div>
        </div>
    )
}

export default Header_part