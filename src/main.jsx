// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import App from "./App.jsx";
import "./index.css";

// ✅ Esta versión soluciona:
// - Contexto dentro del router (ya no “buiten de routing”)
// - Correcta inicialización de React Router v6
// - Estructura limpia y profesional

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Router>
    </React.StrictMode>
);

