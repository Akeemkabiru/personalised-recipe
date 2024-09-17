"use client";

import useRecipe from "@/hooks/useRecipe";

export default function MostSearched() {
  const { recipe, loading, error } = useRecipe();
  const recipes = recipe.extendedIngredients;
  return (
    <div className="w-full h-[60vh] bg-gray-100 md:p-16 p-8">
      <h2 className="text-center font-bold md:text-[30px] text-[18px] text-[#2C2B2B] mb-4">
        Most Searched Recipes
      </h2>
      <div>
        {!loading ? (
          recipes.map((recipe: any) => {
            return <div key={recipe.id}>{recipe.name}</div>;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
