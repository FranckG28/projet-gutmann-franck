import { CatalogOptions } from "../models/catalog-options";

export const newCatalogOptions: CatalogOptions = {
    title: 'Dernières recettes',
    description: 'Découvrez les dernières recettes publiés par la communauté.',
    sorter: (a, b) => {
        return new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime();
    }
};

export const trendingCatalogOptions: CatalogOptions = {
    title: 'Tendances',
    description: 'Les recettes les plus likées du moment 🔥',
    sorter: (a, b) => {
        return 0
        // return b.likes - a.likes;
    }
};