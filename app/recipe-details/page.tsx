"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Clock,
  Star,
  Heart,
  Users,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { suggestedRecipes } from "@/constant";
import { useRouter } from "next/navigation";

interface Recipe {
  id: number;
  title: string;
  image: string;
  prepTime: string;
  rating: number;
  ingredients: string[];
}

const RecipeDetailScreen = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { back, push } = useRouter();

  const detailedIngredients = [
    "2 cups pasta (penne or rigatoni)",
    "1 can (14 oz) crushed tomatoes",
    "1/2 cup heavy cream",
    "3 cloves garlic, minced",
    "1/4 cup fresh basil, chopped",
    "2 tbsp olive oil",
    "Salt and pepper to taste",
    "1/2 cup parmesan cheese, grated",
  ];

  const instructions = [
    "Bring a large pot of salted water to boil. Cook pasta according to package directions until al dente.",
    "While pasta cooks, heat olive oil in a large skillet over medium heat. Add minced garlic and sauté for 1 minute.",
    "Add crushed tomatoes to the skillet. Season with salt and pepper. Simmer for 10 minutes.",
    "Stir in heavy cream and fresh basil. Cook for 2-3 more minutes until heated through.",
    "Drain pasta and add to the sauce. Toss to combine.",
    "Serve immediately topped with grated parmesan cheese and extra fresh basil.",
  ];

  return (
    <div className="min-h-screen w-[450px] bg-background text-sm">
      {/* Header Image */}
      <div className="relative">
        <Image
          src={suggestedRecipes[0].image}
          alt={suggestedRecipes[0].title}
          width={400}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Back Button */}
        <div
          className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm"
          onClick={() => back()}
        >
          <ArrowLeft className="w-5 h-5" />
        </div>

        {/* Favorite Button */}
        <div
          className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm"
          onClick={() => setIsFavorited(!isFavorited)}
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorited ? "fill-red-500 text-red-500" : ""
            }`}
          />
        </div>

        {/* Recipe Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-2xl font-bold text-white mb-2">
            {suggestedRecipes[0].title}
          </h1>
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{suggestedRecipes[0].prepTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current text-chef-orange" />
              <span className="text-sm">{suggestedRecipes[0].rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span className="text-sm">4 servings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="p-6 space-y-6">
        {/* Ingredients */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Ingredients
            </h2>
            <div className="space-y-3">
              {detailedIngredients.map((ingredient, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-chef-orange rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{ingredient}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Instructions
            </h2>
            <div className="space-y-4">
              {instructions.map((instruction, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-chef-orange text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-foreground pt-1">{instruction}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="w-full bg-chef-green hover:bg-chef-green/90 text-white font-semibold py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2">
          <MessageCircle />
          Ask AI Assistant
        </div>

        {/* Nutrition Info */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Nutrition (per serving)
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-chef-warm rounded-xl">
                <div className="font-semibold text-chef-orange">420</div>
                <div className="text-sm text-muted-foreground">Calories</div>
              </div>
              <div className="text-center p-3 bg-chef-warm rounded-xl">
                <div className="font-semibold text-chef-orange">15g</div>
                <div className="text-sm text-muted-foreground">Protein</div>
              </div>
              <div className="text-center p-3 bg-chef-warm rounded-xl">
                <div className="font-semibold text-chef-orange">45g</div>
                <div className="text-sm text-muted-foreground">Carbs</div>
              </div>
              <div className="text-center p-3 bg-chef-warm rounded-xl">
                <div className="font-semibold text-chef-orange">18g</div>
                <div className="text-sm text-muted-foreground">Fat</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Spacing for fixed navigation */}
        <div className="h-20" />
      </div>
    </div>
  );
};

export default RecipeDetailScreen;
