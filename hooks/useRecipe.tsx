import { useEffect, useState } from "react";

const apiKey = "e1f99ae4e9524cae8fc48e136df03553";

export default function useRecipe() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [recipe, setRecipe] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    async function fetchRecipe() {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}`
        );
        if (!res.ok) {
          throw new Error(`${res.statusText}`);
        }
        const response = await res.json();
        setLoading(false);
        setRecipe(response);
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
      }
    }
    fetchRecipe();
  }, []);
  return { recipe, error, loading };
}
