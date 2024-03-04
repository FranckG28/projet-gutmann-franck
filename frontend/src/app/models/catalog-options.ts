import { Product } from "./product";

export interface CatalogOptions {
    title: string;
    description: string;
    sorter: (a: Product, b: Product) => number;
}