'use client';

import { useEffect, useState } from 'react';
import { Recipe } from '@/types/recipe';
import Image from 'next/image';
import { Clock, Users, ChefHat } from 'lucide-react';

export default function Home() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5232/api/recipe')
      .then(response => response.json())
      .then(data => {
        setRecipe(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching recipe:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
        <p className="text-red-500 font-medium">Failed to load recipe</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={recipe.imageUrl}
          alt={recipe.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-5xl font-bold text-center mb-4 text-shadow-lg">{recipe.name}</h1>
          <p className="text-xl text-center max-w-2xl text-shadow-lg">{recipe.description}</p>
        </div>
      </div>

      {/* Recipe Info */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Recipe Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center space-x-4">
            <Clock className="w-8 h-8 text-orange-500" />
            <div>
              <p className="text-sm font-medium text-orange-600">Prep Time</p>
              <p className="text-2xl font-bold text-gray-900">{recipe.prepTimeMinutes} mins</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center space-x-4">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <div>
              <p className="text-sm font-medium text-orange-600">Cook Time</p>
              <p className="text-2xl font-bold text-gray-900">{recipe.cookTimeMinutes} mins</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center space-x-4">
            <Users className="w-8 h-8 text-orange-500" />
            <div>
              <p className="text-sm font-medium text-orange-600">Servings</p>
              <p className="text-2xl font-bold text-gray-900">{recipe.servings} people</p>
            </div>
          </div>
        </div>

        {/* Ingredients & Instructions */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Ingredients */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ingredients</h2>
            <ul className="space-y-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li 
                  key={index} 
                  className={`flex items-center space-x-3 ${
                    ingredient.startsWith('For') ? 'mt-6 font-semibold text-orange-600' : ''
                  }`}
                >
                  {!ingredient.startsWith('For') && (
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                  )}
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Instructions</h2>
            <div className="space-y-6">
              {recipe.steps.map((step) => (
                <div 
                  key={step.stepNumber}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
                      {step.stepNumber}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-800">Step {step.stepNumber}</h3>
                  </div>
                  <p className="text-gray-700 mb-3">{step.description}</p>
                  {step.tip && (
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                      <p className="text-sm text-orange-700">
                        <span className="font-semibold">Tip:</span> {step.tip}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
