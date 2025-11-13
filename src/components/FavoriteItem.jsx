import { Link } from "react-router-dom";

function FavoriteItem({ cocktail }) {
    return (
        <article className="favorite-item">
            <img src={cocktail.image} alt={cocktail.name} />
            <h3>{cocktail.name}</h3>
            <Link to={`/cocktail/${cocktail.id}`} className="btn">
                View
            </Link>
        </article>
    );
}

export default FavoriteItem;
