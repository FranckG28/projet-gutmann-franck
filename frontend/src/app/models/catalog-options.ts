export type CatalogOptions = {
    title: string;
    description: string;
    view: ProductView;
}

export type ProductView = 'latest' | 'liked' | 'trending';