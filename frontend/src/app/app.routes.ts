import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AccountComponent } from './components/account/account.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductComponent } from './pages/product/product.component';
import { DesignerComponent } from './pages/designer/designer.component';
import { SidebarLayoutComponent } from './components/sidebar-layout/sidebar-layout.component';
import { IngredientCatalogComponent } from './components/ingredient-catalog/ingredient-catalog.component';
import { HorizontalLayoutComponent } from './components/horizontal-layout/horizontal-layout.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AsideComponent } from './components/aside/aside.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { appTitleProvider } from './providers/app-title.provider';
import { FiltersService } from './services/filters.service';
import { catalogOptionsProvider } from './providers/catalog-options.provider';
import { likedCatalogOptions, newCatalogOptions, trendingCatalogOptions } from './config/catalog-options.config';
import { CartComponent } from './pages/cart/cart.component';
import { isConnectedGuard, isNotConnectedGuard } from './guards/isConnected.guard';
import { SearchComponent } from './pages/search/search.component';
import { PayComponent } from './pages/pay/pay.component';

export const routes: Routes = [
    {
        path: '',
        component: HorizontalLayoutComponent,
        providers: [FiltersService],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'trending' },
            {
                path: '',
                canActivate: [isNotConnectedGuard],
                children: [
                    {
                        path: 'login',
                        component: LoginComponent
                    },
                    {
                        path: 'signup',
                        component: SignupComponent
                    },
                ]
            },
            {
                path: 'cart',
                component: CartComponent,
            },
            {
                path: 'pay',
                component: PayComponent,
                canActivate: [isConnectedGuard]
            },
            {
                path: '',
                component: NavigationComponent,
                outlet: 'navigation'
            },
            {
                path: '',
                component: AsideComponent,
                outlet: 'aside'
            },
            {
                path: 'trending',
                component: CatalogComponent,
                providers: [
                    {
                        provide: catalogOptionsProvider,
                        useValue: trendingCatalogOptions,
                    }
                ]
            },
            {
                path: 'latest',
                component: CatalogComponent,
                providers: [
                    {
                        provide: catalogOptionsProvider,
                        useValue: newCatalogOptions,
                    }
                ]
            },
            {
                path: 'liked',
                component: CatalogComponent,
                providers: [
                    {
                        provide: catalogOptionsProvider,
                        useValue: likedCatalogOptions,
                    }
                ]
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'account',
                component: AccountComponent,
                canActivate: [isConnectedGuard]
            },
            {
                path: 'product',
                children: [
                    {
                        path: ':productId',
                        providers: [
                            {
                                provide: appTitleProvider,
                                useValue: 'Recette'
                            }
                        ],
                        children: [
                            {
                                path: '',
                                component: ProductComponent
                            },
                            {
                                path: '',
                                outlet: 'appbar',
                                component: AppbarComponent
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: SidebarLayoutComponent,
                canActivate: [isConnectedGuard],
                children: [
                    {
                        path: '',
                        component: IngredientCatalogComponent,
                        outlet: 'sidebar'
                    },
                    {
                        path: 'designer',
                        component: DesignerComponent,
                    }
                ]
            },
        ]
    }];
