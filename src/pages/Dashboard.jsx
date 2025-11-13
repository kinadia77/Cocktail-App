// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // ✅ usamos el hook correcto
import { db } from "../firebase/config"; // ✅ ruta corregida
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    const { currentUser } = useAuth(); // ✅ obtenemos el usuario desde el hook
    const [favoriteCocktails, setFavoriteCocktails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavoriteCocktails = async () => {
            if (currentUser) {
                try {
                    const favoritesRef = doc(db, "favorites", currentUser.uid);
                    const favoritesDoc = await getDoc(favoritesRef);

                    if (favoritesDoc.exists()) {
                        const favoritesData = favoritesDoc.data();
                        const favoriteIds = Object.keys(favoritesData).filter(
                            (id) => favoritesData[id]
                        );

                        // Fetch details for each favorite cocktail
                        const cocktailPromises = favoriteIds.map(async (id) => {
                            try {
                                const response = await fetch(
                                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                                );
                                const data = await response.json();
                                if (data.drinks && data.drinks[0]) {
                                    const drink = data.drinks[0];
                                    return {
                                        id: drink.idDrink,
                                        name: drink.strDrink,
                                        image: drink.strDrinkThumb,
                                        category: drink.strCategory,
                                    };
                                }
                            } catch (error) {
                                console.error(`Error fetching cocktail ${id}:`, error);
                                return null;
                            }
                        });

                        const cocktails = (await Promise.all(cocktailPromises)).filter(Boolean);
                        setFavoriteCocktails(cocktails);
                    }
                } catch (error) {
                    console.error("Error fetching favorites:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchFavoriteCocktails();
    }, [currentUser]);

    if (loading) {
        return <div className="dashboard-container">Loading your favorites...</div>;
    }

    return (
        <div className="dashboard-container">
            <h1>Welcome to Your Bar, {currentUser?.displayName || currentUser?.email}!</h1>

            <div className="favorites-section">
                <h2>Your Favorite Cocktails</h2>

                {favoriteCocktails.length === 0 ? (
                    <p>
                        You haven't saved any favorite cocktails yet. Start exploring and add some!
                    </p>
                ) : (
                    <div className="favorites-grid">
                        {favoriteCocktails.map((cocktail) => (
                            <div key={cocktail.id} className="favorite-item">
                                <img src={cocktail.image} alt={cocktail.name} />
                                <h3>{cocktail.name}</h3>
                                <p>{cocktail.category}</p>
                                <Link to={`/cocktail/${cocktail.id}`} className="btn btn-primary">
                                    View Recipe
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
