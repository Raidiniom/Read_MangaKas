import "../styles/register_page.css"

export default function Register_page() {
    
    return (
        <>
            <div className="register-body">
                <form className="register-form" aria-label="register form">
                    <h1 className="register-title">Register</h1>
                    
                    <div className="register-field">
                        <label htmlFor="username">Username</label>
                        <input id="username" className="register-input" type="text" placeholder="username" required/>
                    </div>
                    
                    <div className="register-field">
                        <label htmlFor="password">Password</label>
                        <input id="password" className="register-input" type="password" placeholder="******" required/>
                    </div>
                    
                    <div className="register-field">
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input id="confirm_password" className="register-input" type="password" placeholder="******" required/>
                    </div>
                    
                    <div className="register-field">
                        <label htmlFor="email">Email</label>
                        <input id="email" className="register-input" type="email" placeholder="readmangakas@mail.com" required/>
                    </div>

                    <button type="submit">Confirm</button>
                </form>
            </div>
        </>
    )
}