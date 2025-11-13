// src/pages/SignUp.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ usamos el hook correcto
import { auth } from "../firebase/config"; // ✅ ruta corregida
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./SignUp.css";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { setCurrentUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name });
            setCurrentUser(userCredential.user);
            navigate("/dashboard");
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Error signing up: " + error.message);
        }
    };

    return (
        <div className="signup-container">
            <h2>Create Your Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

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

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>

            <p>
                Already have an account?{" "}
                <Link to="/login" className="login-link">Login</Link>
            </p>
        </div>
    );
};

export default Signup;
