import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            component: HomepageComponent
        }
    ]
}];
