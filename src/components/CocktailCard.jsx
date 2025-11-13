import { Link } from "react-router-dom";

function CocktailCard({ drink }) {
    return (
        <article className="cocktail-card">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <h3>{drink.strDrink}</h3>
            <p>{drink.strCategory}</p>
            <Link to={`/cocktail/${drink.idDrink}`} className="btn">
                View Details
            </Link>
        </article>
    );
}

export default CocktailCard;
