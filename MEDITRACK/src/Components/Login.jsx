import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"

export default function Login({ setIsAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "12345") {
            setIsAuthenticated(true); // Mark user as logged in
            navigate("/dashboard"); // Redirect to dashboard
        } else {
            alert("Incorrect password. Try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>MediTrack</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
