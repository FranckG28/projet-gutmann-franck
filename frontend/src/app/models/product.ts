import { Ingredient } from "./ingredient";
import { User } from "./user";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    ingredients: Ingredient[];
    user?: User;
    userId: number;
    // rating: number;
    createdAt: string;
    meta: {
        likedBy_count: number;
    }
    // comments: number;
    // orders: number;
    // remixes: number;
}