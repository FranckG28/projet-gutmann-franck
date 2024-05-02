import { CatalogOptions } from "../models/catalog-options";

export const newCatalogOptions: CatalogOptions = {
    title: 'Dernières recettes',
    description: 'Découvrez les dernières recettes publiés par la communauté.',
    view: 'latest',
}

export const trendingCatalogOptions: CatalogOptions = {
    title: 'Tendances',
    description: 'Les recettes les plus likées du moment 🔥',
    view: 'trending',
};

export const likedCatalogOptions: CatalogOptions = {
    title: 'Recettes aimées',
    description: 'Retrouvez toutes les recettes que vous avez aimées.',
    view: 'liked',
};