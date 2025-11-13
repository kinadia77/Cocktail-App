import { useState } from "react";

function FavoriteButton({ isFavorite, onToggle }) {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            await onToggle(); // tu lógica actual (toggleFavorite)
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            type="button"
            disabled={loading}
            className={`fav-btn ${isFavorite ? "active" : ""}`}
        >
            {loading ? "Saving..." : isFavorite ? "❤️" : "🤍"}
        </button>
    );
}

export default FavoriteButton;
