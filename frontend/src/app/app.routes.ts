import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            component: HomepageComponent
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'signup',
            component: SignupComponent
        }
    ]
}];
