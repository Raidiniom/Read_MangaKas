import './styles/landing.css'

export default function Landing_Page() {
    
    return (
        <>
          <div className='landing-header'>
            <h1 className='landing-title'>Read_MangaKas</h1>
            <div className="routes">
                <button>Login</button>
                <button>Register</button>
            </div>
          </div>

          <div className='landing-body'></div>
        </>
    )
}