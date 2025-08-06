"use client";

import Button from "@/components/ui/button";
import { ChefHat, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WelcomeScreen() {
  const { push } = useRouter();

  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-8 from-chef-cream to-chef-warm bg-gradient-to-br py-12 px-6 rounded-2xl">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Image
              src="/images/chef-logo.png"
              alt="SmartChef Logo"
              width={100}
              height={100}
              className="w-24 h-24 rounded-full shadow-lg"
            />
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-6 h-6 text-chef-orange animate-pulse" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">SmartChef</h1>
            <p className="text-muted-foreground text-lg">
              Your AI cooking assistant
            </p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="space-y-4">
          <Button onClick={() => push("/recipes")}>Get Started</Button>
          <Button outline={true}>Sign in</Button>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-3 gap-4 pt-8">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-chef-green-light rounded-full flex items-center justify-center mx-auto">
              <ChefHat className="w-6 h-6 text-chef-green" />
            </div>
            <p className="text-xs text-muted-foreground">AI Recipes</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-chef-green-light rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6 text-chef-green" />
            </div>
            <p className="text-xs text-muted-foreground">Smart Suggestions</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-chef-green-light rounded-full flex items-center justify-center mx-auto">
              <ChefHat className="w-6 h-6 text-chef-green" />
            </div>
            <p className="text-xs text-muted-foreground">Voice Assistant</p>
          </div>
        </div>
      </div>
    </div>
  );
}
