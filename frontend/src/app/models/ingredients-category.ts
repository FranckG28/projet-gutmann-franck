import { Ingredient } from "./ingredient";

export interface IngredientsCategory {
    name: string;
    description: string;
    ingredients?: Ingredient[];
}