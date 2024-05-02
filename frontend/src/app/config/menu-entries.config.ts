import { MenuEntry } from "../models/menu-entry";

export const menuEntries: MenuEntry[] = [
    {
        title: 'Recettes',
        path: '/'
    },
];

export const appEntries: MenuEntry[] = [
    {
        title: 'Tendances',
        path: '/trending',
        icon: 'tuiIconChartLineLarge'
    },
    {
        title: 'Nouveautés',
        path: '/latest',
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
