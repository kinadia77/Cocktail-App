import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import SingleCocktail from "./pages/SingleCocktail";
import Apitest from "./pages/Apitest";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/apitest" element={<Apitest />} />
                    <Route path="/cocktail/:id" element={<SingleCocktail />} />

                    {/* Protected route */}
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />

                    {/* Fallback route for errors */}
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
        </>
    );
}

export default App;

{/* PR 3: small React cleanup comment */}
