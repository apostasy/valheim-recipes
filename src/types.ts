declare interface Material {
    Name: string;
    Category: string;
    Weight: number;
    Notes: string;
}

declare interface CraftingRecipe {
    Ingredients: Ingredient[];
    Quantity: number;    
    Material: Material;
}

declare interface Ingredient {
    Material: Material;
    Quantity: number;
}

declare interface RecipeSet {
    Material: Material;
    Recipes: CraftingRecipe[] | null;
    SubRecipes: RecipeSet[] | null;
}

declare interface RecipeDefinition {
    Result: string;
    Quantity: number;
    Ingredient: string;
    "Ingredient Quantity": number;
    "Logical Operator": string;
}