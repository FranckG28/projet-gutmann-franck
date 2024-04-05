import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContainerComponent } from './components/container/container.component';
import { AccountComponent } from './components/account/account.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { LargeContainerComponent } from './components/large-container/large-container.component';
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
import { newCatalogOptions, trendingCatalogOptions } from './config/catalog-options.config';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            component: LargeContainerComponent,
            children: [
                {
                    path: '',
                    component: HomepageComponent
                },
                {
                    path: 'cart',
                    component: CartComponent,
                }
            ]
        },
        {
            path: '',
            component: ContainerComponent,
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
            path: '',
            component: SidebarLayoutComponent,
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
},
{
    path: 'app',
    component: HorizontalLayoutComponent,
    providers: [FiltersService],
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'trending' },
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
            path: 'account',
            component: AccountComponent,
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

}];
