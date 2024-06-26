import { IngredientsCategory } from "./ingredients-category";

export interface Ingredient {
    id: number;
    name: string;
    price: string;
    description: string;
    thumbnailUrl?: string;
    imageUrl?: string;
    category?: IngredientsCategory;
    categoryId: number;
}