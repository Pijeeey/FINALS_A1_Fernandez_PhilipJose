export interface RecipeStep {
    stepNumber: number;
    description: string;
    tip?: string;
}

export interface Recipe {
    id: number;
    name: string;
    description: string;
    ingredients: string[];
    steps: RecipeStep[];
    imageUrl: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
} 