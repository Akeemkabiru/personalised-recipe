"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Clock, Star, Sparkles } from "lucide-react";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { suggestedRecipes } from "@/constant";
import { useRouter } from "next/navigation";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState("");
  const { push } = useRouter();

  const addIngredient = () => {
    if (newIngredient.trim() && !ingredients.includes(newIngredient.trim())) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient("");
    }
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((i) => i !== ingredient));
  };

  const { ref, inView } = useInView({ threshold: 1, rootMargin: "100px" });

  return (
    <div
      className={`min-h-screen text-sm  overflow-y-scroll md:overflow-hidden bg-background w-[450px]`}
    >
      {/* Header */}
      <div
        ref={ref}
        className={`bg-gradient-to-r from-chef-orange to-chef-orange-light p-6 rounded-b-3xl shadow-lg`}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">SmartChef</h1>
            <Sparkles className="w-6 h-6 text-white" />
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What can I cook with...?"
              className="pl-10 bg-white rounded-2xl border-0 shadow-md"
            />
          </div>

          {/* Ingredients Input */}
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <Input
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                placeholder="Add ingredient..."
                className="bg-white rounded-xl border-0 shadow-md"
                onSubmit={() => addIngredient()}
                onKeyPress={(e) => e.key === "Enter" && addIngredient()}
              />

              <div
                onClick={() => addIngredient()}
                className="bg-white text-black rounded-xl p-3 font-semibold hover:bg-chef-green group transition-colors duration-300 hover:text-white cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </div>
            </div>

            {/* Ingredient Tags */}
            {ingredients.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {ingredients.map((ingredient, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white text-chef-orange rounded-full px-3 py-1 cursor-pointer hover:bg-chef-warm transition-colors"
                    onClick={() => removeIngredient(ingredient)}
                  >
                    {`${ingredient} x`}
                  </Badge>
                ))}
              </div>
            )}

            {/* Generate Recipe Button */}
            <Button greenBg={true}>✨ Generate Recipe</Button>
          </div>
        </div>
      </div>

      {/* Recipe Suggestions */}
      <div className="p-6 space-y-4 mb-24">
        <h2 className="text-xl font-semibold text-foreground">
          AI Suggested Recipes
        </h2>

        <div className="space-y-4">
          {suggestedRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              onClick={() => push("/recipe-details")}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg cursor-pointer hover:scale-105 transition-all "
            >
              <CardContent className="p-0">
                <div className="flex">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    width={100}
                    height={50}
                    className="object-cover"
                  />
                  <div className="flex-1 p-4 space-y-2">
                    <h3 className="font-semibold text-foreground line-clamp-2">
                      {recipe.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.prepTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current text-chef-orange" />
                        <span>{recipe.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white transition-all duration-500 border-t border-border px-4 py-2 shadow-lg ${
          inView ? "translate-y-24 md:translate-y-0" : "translate-y-0"
        }`}
      >
        <div className="flex justify-around">
          <div className="flex flex-col items-center gap-y-2 font-medium">
            <Search className="w-4 h-4" />
            <span className="text-xs">Search</span>
          </div>

          <div
            onClick={() => push("/assistant")}
            className="flex flex-col items-center gap-y-2 font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-xs">Voice</span>
          </div>

          <div
            onClick={() => push("/favorites")}
            className="flex flex-col items-center gap-y-2 font-medium"
          >
            <Star className="w-4 h-4" />
            <span className="text-xs">Favorites</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
