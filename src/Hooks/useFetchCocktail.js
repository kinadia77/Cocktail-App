import { useState, useEffect } from "react";

export function useFetchCocktail(id) {
    const [cocktail, setCocktail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        const controller = new AbortController();

        async function load() {
            try {
                setLoading(true);
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) throw new Error("API error");

                const json = await res.json();
                setCocktail(json.drinks ? json.drinks[0] : null);
            } catch (err) {
                if (err.name !== "AbortError") setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        load();

        return () => controller.abort();
    }, [id]);

    return { cocktail, loading, error };
}
