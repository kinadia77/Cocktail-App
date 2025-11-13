import { useState, useEffect } from "react";

export function useFetchList(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                setLoading(true);

                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) throw new Error("API error");

                const json = await res.json();

                if (json.drinks) {
                    const mapped = json.drinks.map((item) => ({
                        id: item.idDrink,
                        name: item.strDrink,
                        image: item.strDrinkThumb,
                        info: item.strAlcoholic,
                        glass: item.strGlass,
                    }));

                    setData(mapped);
                } else {
                    setData([]);
                }
            } catch (err) {
                if (err.name !== "AbortError") setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        load();

        return () => controller.abort();
    }, [url]);

    return { data, loading, error };
}
