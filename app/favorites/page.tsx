"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, Clock, Star, Trash2 } from "lucide-react";
import { suggestedRecipes } from "@/constant";
import { useRouter } from "next/navigation";

interface FavoriteRecipe {
  id: number;
  title: string;
  image: string;
  prepTime: string;
  rating: number;
  savedDate?: string;
}

const FavoritesScreen = () => {
  const [favorites, setFavorites] =
    useState<FavoriteRecipe[]>(suggestedRecipes);

  const { back } = useRouter();

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-chef-orange to-chef-orange-light p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 cursor-pointer">
            <ArrowLeft className="w-5 h-5" onClick={() => back()} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">My Favorites</h1>
            <p className="text-white/80 text-sm">
              {favorites.length} saved recipes
            </p>
          </div>
        </div>
      </div>

      {/* Favorites Content */}
      <div className="p-6">
        {favorites.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16 space-y-4">
            <div className="w-20 h-20 bg-chef-warm rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                No favorites yet
              </h2>
              <p className="text-muted-foreground">
                Save recipes you love by tapping the heart icon
              </p>
            </div>
            <div className="bg-chef-orange hover:bg-chef-orange-light text-white rounded-2xl px-6">
              Discover Recipes
            </div>
          </div>
        ) : (
          /* Favorites Grid */
          <div className="grid grid-cols-1 gap-4">
            {favorites.map((recipe) => (
              <Card
                key={recipe.id}
                className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow group"
              >
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Recipe Image */}
                    <div
                      className="w-28 h-28 bg-cover bg-center cursor-pointer"
                      style={{ backgroundImage: `url(${recipe.image})` }}
                    />

                    {/* Recipe Info */}
                    <div className="flex-1 p-4 space-y-2">
                      <div className="cursor-pointer">
                        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-chef-orange transition-colors">
                          {recipe.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{recipe.prepTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-current text-chef-orange" />
                            <span>{recipe.rating}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Saved {recipe.savedDate}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col justify-between p-4">
                      <div
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full h-8 w-8"
                        onClick={() => removeFavorite(recipe.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </div>
                      <Heart className="w-5 h-5 fill-current text-red-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Categories */}
        {favorites.length > 0 && (
          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Quick Filters
            </h2>
            <div className="flex gap-2 overflow-x-auto">
              <div className="rounded-full text-xs whitespace-nowrap border-chef-orange text-chef-orange hover:bg-chef-orange hover:text-white">
                All ({favorites.length})
              </div>
              <div className="rounded-full text-xs whitespace-nowrap">
                Quick Meals
              </div>
              <div className="rounded-full text-xs whitespace-nowrap">
                Desserts
              </div>
              <div className="rounded-full text-xs whitespace-nowrap">
                Healthy
              </div>
            </div>
          </div>
        )}

        {/* Bottom Spacing */}
        <div className="h-20" />
      </div>
    </div>
  );
};

export default FavoritesScreen;
