import { MenuEntry } from "../models/menu-entry";

export const menuEntries: MenuEntry[] = [
    {
        title: 'Nos ingredients',
        path: '/ingredients'
    },
    {
        title: 'Vos recettes',
        path: '/app'
    },
    {
        title: 'Créer ma recette',
        path: '/designer',
        style: 'primary'
    }
];

export const appEntries: MenuEntry[] = [
    {
        title: 'Tendances',
        path: '/app/trending',
        icon: 'tuiIconChartLineLarge'
    },
    {
        title: 'Nouveautés',
        path: '/app/latest',
        icon: 'tuiIconSunLarge'
    },
    {
        title: 'Rechercher',
        path: '/app/search',
        icon: 'tuiIconSearchLarge'
    },
    {
        title: 'Favoris',
        path: '/app/likes',
        icon: 'tuiIconHeartLarge'
    },
    {
        title: 'Historique',
        path: '/app/orders',
        icon: 'tuiIconBookmarkLarge'
    },
    {
        title: 'Créer ma recette',
        path: '/designer',
        style: 'primary'
    }
];
