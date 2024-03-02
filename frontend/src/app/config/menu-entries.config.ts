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
        path: '/trending',
        icon: 'tuiIconChartLineLarge'
    },
    {
        title: 'Nouveautés',
        path: '/new',
        icon: 'tuiIconSunLarge'
    },
    {
        title: 'Rechercher',
        path: '/search',
        icon: 'tuiIconSearchLarge'
    },
    {
        title: 'Favoris',
        path: '/likes',
        icon: 'tuiIconHeartLarge'
    },
    {
        title: 'Historique',
        path: '/orders',
        icon: 'tuiIconBookmarkLarge'
    },
    {
        title: 'Créer ma recette',
        path: '/designer',
        style: 'primary'
    }
];
