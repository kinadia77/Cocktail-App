// src/components/Cocktail.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/config";
import { useAuth } from "../context/AuthContext"; // ✅ usamos el hook correcto
import { doc, updateDoc, setDoc, getDoc } from "firebase/firestore";
import "./Cocktail.css";

export default function Cocktail({ image, name, id, info, glass }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const { currentUser } = useAuth(); // ✅ obtenemos el usuario desde el hook

    // Revisar si el cóctel ya es favorito cuando el componente se monta
    useEffect(() => {
        const checkIfFavorite = async () => {
            if (currentUser) {
                const favoritesRef = doc(db, "favorites", currentUser.uid);
                const favoritesDoc = await getDoc(favoritesRef);

                if (favoritesDoc.exists() && favoritesDoc.data()[id]) {
                    setIsFavorite(true);
                }
            }
        };

        checkIfFavorite();
    }, [currentUser, id]);

    const toggleFavorite = async () => {
        if (!currentUser) {
            alert("Please log in to save favorites!");
            return;
        }

        const newFavoriteState = !isFavorite;
        setIsFavorite(newFavoriteState);

        try {
            await updateFavoriteInFirestore(id, newFavoriteState);
        } catch (error) {
            console.error("Error updating favorite:", error);
            setIsFavorite(!newFavoriteState); // revertir en caso de error
        }
    };

    const updateFavoriteInFirestore = async (cocktailId, isFavorite) => {
        const favoritesRef = doc(db, "favorites", currentUser.uid);
        const favoritesDoc = await getDoc(favoritesRef);

        if (!favoritesDoc.exists()) {
            await setDoc(favoritesRef, {});
        }

        await updateDoc(favoritesRef, {
            [cocktailId]: isFavorite,
        });
    };

    return (
        <article className="cocktail">
            <div className="img-container">
                <img src={image} alt={name} />
            </div>
            <div className="cocktail-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <div className="cocktail-actions">
                    <button
                        className={`btn-favorite ${isFavorite ? "favorite" : ""}`}
                        onClick={toggleFavorite}
                        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        {isFavorite ? "❤️" : "🤍"}
                    </button>
                    <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
                        View Recipe
                    </Link>
                </div>
            </div>
        </article>
    );
}
