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
        }
    ]
},
{
    path: '',
    component: HorizontalLayoutComponent,
    children: [
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
            path: 'account',
            component: AccountComponent,
        },
        {
            path: 'catalog',
            component: CatalogComponent,
        },
        {
            path: 'product/:productId',
            component: ProductComponent,
        },
    ]

}];
