import "../styles/register_page.css"

export default function Register_page() {
    
    return (
        <>
            <div className="register-body">
                <div className="register-form">
                    <h1 className="register-title">Register</h1>
                    
                    <input type="text" placeholder="username" required/>
                    
                    <input type="password" placeholder="******" required/>
                    
                    <input type="email" placeholder="readmangakas@mail.com" required/>

                    <button type="submit">Confirm</button>

                    {/*  */}
                </div>
            </div>
        </>
    )
}