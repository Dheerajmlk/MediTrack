import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Redux/Auth";
import "../styles/Signin.css"; // ✅ Ensure CSS is imported

const Signin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.auth.error);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        dispatch(signUp({ email, password }));
        navigate("/dashboard"); // ✅ Redirect to Dashboard after sign-up
    };

    return (
        <div className="signup-container"> {/* ✅ Matches CSS */}
            <form className="signup-form"> {/* ✅ Matches CSS */}
                <h2>Sign Up</h2>

                <div className="form-control">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="form-control">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit" className="signup-button">Sign Up</button>

                {error && <p className="error-message">{error}</p>}

                <p className="alternative-action">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    );
};

export default Signin;
