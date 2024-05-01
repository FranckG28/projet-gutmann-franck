import { Product } from "./product";

export type User = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;
    products?: Product[];
}