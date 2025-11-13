// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// 🔒 Este componente protege rutas privadas.
// Solo permite acceso si el usuario está autenticado.
const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();

    // Si el usuario está logueado -> renderiza el componente hijo
    // Si no -> redirige al login
    return currentUser ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
