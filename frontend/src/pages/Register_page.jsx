import { useState } from "react";
import "../styles/register_page.css"

export default function Register_page() {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState({
        score: 0,
        label: "None",
        requirements: {
            length: false,
            uppercase: false,
            lowercase: false,
            number: false,
            special: false
        }
    });

    const checkPasswordStrength = (password) => {
        let score = 0;
        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };

        // Calculate score
        if (requirements.length) score += 1;
        if (requirements.uppercase) score += 1;
        if (requirements.lowercase) score += 1;
        if (requirements.number) score += 1;
        if (requirements.special) score += 1;

        // Determine strength label
        let label = "Weak";
        let strengthClass = "weak";
        
        if (score >= 4) {
            label = "Strong";
            strengthClass = "strong";
        } else if (score >= 3) {
            label = "Medium";
            strengthClass = "medium";
        }

        setStrength({
            score,
            label,
            strengthClass,
            requirements
        });
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkPasswordStrength(newPassword);
    };

    const getStrengthPercentage = () => {
        if (password.length === 0) return 0;
        const maxScore = 5; // Number of requirements
        return (strength.score / maxScore) * 100;
    };

    return (
        <>
            <div className="register-body">
                <form className="register-form">
                    <h1 className="register-title">Register</h1>
                    
                    <div className="register-field">
                        <label htmlFor="username">Username</label>
                        <input id="username" className="register-input" type="text" placeholder="MangaReader123" required/>
                    </div>
                    
                    <div className="register-field">
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            className="register-input" 
                            type="password" 
                            placeholder="******" 
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        
                        {/* Password Strength Indicator */}
                        {password.length > 0 && (
                            <div className="password-strength-container">
                                <div className="strength-label">
                                    <span>Password Strength:</span>
                                    <span className={`strength-text ${strength.strengthClass}`}>
                                        {strength.label}
                                    </span>
                                </div>
                                <div className="strength-meter">
                                    <div className={`strength-bar ${strength.strengthClass}`} 
                                         style={{width: `${getStrengthPercentage()}%`}}>
                                    </div>
                                </div>
                                
                                {/* Requirements Checklist */}
                                <ul className="strength-requirements">
                                    <li className={strength.requirements.length ? "requirement-met" : "requirement-failed"}>
                                        At least 8 characters
                                    </li>
                                    <li className={strength.requirements.uppercase ? "requirement-met" : "requirement-failed"}>
                                        Contains uppercase letter
                                    </li>
                                    <li className={strength.requirements.lowercase ? "requirement-met" : "requirement-failed"}>
                                        Contains lowercase letter
                                    </li>
                                    <li className={strength.requirements.number ? "requirement-met" : "requirement-failed"}>
                                        Contains number
                                    </li>
                                    <li className={strength.requirements.special ? "requirement-met" : "requirement-failed"}>
                                        Contains special character
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    
                    <div className="register-field">
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input id="confirm_password" className="register-input" type="password" placeholder="******" required/>
                    </div>
                    
                    <div className="register-field">
                        <label htmlFor="email">Email</label>
                        <input id="email" className="register-input" type="email" placeholder="MangaReader123@mail.com" required/>
                    </div>

                    <button type="submit">Create Account</button>
                    
                    <p>Already have an account? <a href="/login">Sign in</a></p>
                </form>
            </div>
        </>
    )
}