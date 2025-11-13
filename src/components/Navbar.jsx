import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo2.svg";

// 🎨 Estilos en línea (ignoran los CSS externos)
const navbarStyle = {
    backgroundColor: "#145a32", // 🌿 Verde botella
    color: "white",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    height: "4.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
};

const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
};

const logoStyle = {
    height: "40px",
};

const logoTextStyle = {
    fontWeight: "bold",
    fontSize: "1.3rem",
    letterSpacing: "0.5px",
};

const linkContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
};

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: 500,
    textTransform: "capitalize",
    transition: "color 0.3s ease",
};

const linkHoverStyle = {
    color: "#f6c344", // Dorado
};

// 🎯 Navbar principal
export default function Navbar() {
    return (
        <nav style={navbarStyle}>
            {/* Logo y texto */}
            <div style={logoContainerStyle}>
                <img src={logo} alt="CocktailCorner Logo" style={logoStyle} />
                <span style={logoTextStyle}>CocktailCorner</span>
            </div>

            {/* Enlaces */}
            <div style={linkContainerStyle}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/login" style={linkStyle}>Login</Link>
                <Link to="/signup" style={linkStyle}>Sign Up</Link>
                <Link to="/apitest" style={linkStyle}>API Test</Link>
            </div>
        </nav>
    );
}

