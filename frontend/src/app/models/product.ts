import { Ingredient } from "./ingredient";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    recipe: string[];
}