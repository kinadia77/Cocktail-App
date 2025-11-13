// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/AuthContext"; // ✅ usamos el contexto correcto
import { auth } from "../firebase/config"; // ✅ ruta corregida
console.log("✅ Firebase Auth conectado correctamente:", auth);
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { setCurrentUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setCurrentUser(userCredential.user);
            navigate("/dashboard"); // ✅ redirige al dashboard tras login exitoso
        } catch (error) {
            console.error("Error logging in:", error);
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="login-container">
            <h2>Welcome Back!</h2>
            <form onSubmit={handleSubmit}>
                {error && <p className="error-message">{error}</p>}

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <p>
                Don't have an account yet?{" "}
                <Link to="/signup" className="signup-link">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;


