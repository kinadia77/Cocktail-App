import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import "./SingleCocktail.css";

export default function SingleCocktail() {
    const { id } = useParams();
    const { currentUser } = useAuth();

    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    // 🔹 Obtener los detalles del cóctel
    useEffect(() => {
        setLoading(true);
        async function getCocktail() {
            try {
                const response = await fetch(
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                );
                const data = await response.json();
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strAlcoholic: info,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0];

                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ];

                    const newCocktail = {
                        idDrink: id,
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    };

                    setCocktail(newCocktail);
                } else {
                    setCocktail(null);
                }
            } catch (error) {
                console.error("Error fetching cocktail:", error);
            }
            setLoading(false);
        }

        getCocktail();
    }, [id]);

    // 🔹 Verificar si el cóctel ya está en favoritos
    useEffect(() => {
        if (!currentUser || !cocktail) return;

        const checkFavorite = async () => {
            const favoritesRef = doc(db, "favorites", currentUser.uid);
            const favoritesSnap = await getDoc(favoritesRef);
            if (favoritesSnap.exists()) {
                const data = favoritesSnap.data();
                setIsFavorite(!!data[cocktail.idDrink]);
            }
        };

        checkFavorite();
    }, [currentUser, cocktail]);

    // ❤️ Agregar o eliminar de favoritos
    const toggleFavorite = async () => {
        if (!currentUser) {
            alert("Please log in to save favorites.");
            return;
        }

        try {
            const favoritesRef = doc(db, "favorites", currentUser.uid);
            const favoritesSnap = await getDoc(favoritesRef);

            if (favoritesSnap.exists() && favoritesSnap.data()[cocktail.idDrink]) {
                // 🔻 Eliminar de favoritos
                const updated = { ...favoritesSnap.data() };
                delete updated[cocktail.idDrink];
                await setDoc(favoritesRef, updated);
                setIsFavorite(false);
                alert(`${cocktail.name} removed from favorites.`);
            } else {
                // ❤️ Agregar a favoritos
                await setDoc(
                    favoritesRef,
                    {
                        [cocktail.idDrink]: {
                            id: cocktail.idDrink,
                            name: cocktail.name,
                            image: cocktail.image,
                            category: cocktail.category,
                        },
                    },
                    { merge: true }
                );
                setIsFavorite(true);
                alert(`${cocktail.name} added to favorites!`);
            }
        } catch (error) {
            console.error("Error updating favorites:", error);
            alert("There was an error updating your favorites.");
        }
    };

    // 🔹 Renderizado
    if (loading) {
        return <h2 className="section-title">Loading...</h2>;
    }

    if (!cocktail) {
        return <h2 className="section-title">No cocktail to display</h2>;
    }

    const { name, image, category, info, glass, instructions, ingredients } = cocktail;

    return (
        <section className="section cocktail-section">
            <Link to="/" className="btn btn-primary">
                Back home
            </Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
                <img src={image} alt={name} className="single-img" />  {/* 🫵 luego ajustaremos esto */}

                <div className="drink-info">
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Info:</strong> {info}</p>
                    <p><strong>Glass:</strong> {glass}</p>
                    <p><strong>Instructions:</strong> {instructions}</p>

                    {/* 🫵 AQUÍ VA SOLO UN CONTENEDOR */}
                    <div className="single-tags">
                        {ingredients.map(
                            (item, index) => item && <span key={index}>{item}</span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}