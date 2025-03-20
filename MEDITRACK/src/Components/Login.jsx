import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Auth";
import "../styles/Login.css"; // ✅ Ensure CSS is imported

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.auth.error);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
        navigate("/dashboard"); // ✅ Redirect to Dashboard after login
    };

    return (
        <div className="login-container"> {/* ✅ Matches CSS */}
            <form className="login-form"> {/* ✅ Matches CSS */}
                <h2>Login</h2>

                <div className="form-control">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="form-control">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit" className="login-button">Login</button>

                {error && <p className="error-message">{error}</p>}

                <p className="alternative-action">
                    Don't have an account? <a href="/signin">Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
