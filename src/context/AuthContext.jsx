// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config"; // ✅ ruta corregida

// ✅ Crear el contexto
const AuthContext = createContext();

// ✅ Hook personalizado
export const useAuth = () => useContext(AuthContext);

// ✅ Proveedor global
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const logout = async () => {
        await signOut(auth);
    };

    const value = { currentUser, setCurrentUser, logout }; // ✅ añadimos setCurrentUser para login/signup

    if (loading) {
        return (
            <div
                style={{
                    textAlign: "center",
                    padding: "5rem",
                    fontSize: "1.5rem",
                    color: "#4a154b",
                }}
            >
                🔄 Loading app...
            </div>
        );
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
