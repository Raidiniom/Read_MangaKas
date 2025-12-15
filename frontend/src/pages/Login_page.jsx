import { Link } from 'react-router-dom';

import "../styles/login_page.css";

export default function Login_page() {
    
    return (
        <>
            <div className="login-body">
                <form className="login-form">
                    <h1 className="login-title">Login</h1>

                    <div className="login-field">
                        <label htmlFor="username">Username</label>
                        <input id="username" className="" type="text" placeholder="MangaReader123" required/>
                    </div>

                    <div className="login-field">
                        <label htmlFor="password">Password</label>
                        <input id="password" className="" type="password" placeholder="******" required/>
                    </div>

                    <button type="submit">Confirm</button>

                    <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                </form>
            </div>
        </>
    )
}