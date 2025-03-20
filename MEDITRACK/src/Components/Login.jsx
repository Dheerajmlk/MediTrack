import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Auth";
import "../styles/Login.css"

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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
            <p>Don't have an account? <a href="/signin">Sign Up</a></p>
        </div>
    );
};

export default Login;
