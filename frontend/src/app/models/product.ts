export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    recipe: string[];
    author: string;
    rating: number;
    createdOn: string;
    likes: number;
    comments: number;
    orders: number;
}