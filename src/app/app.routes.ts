import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { canActivateAuth } from './auth/access,guard';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent, children: [
        {path: '', redirectTo: 'profile/me', pathMatch: 'full'},
        {path: 'profile/:id', component: ProfileComponent},
        {path: 'settings', component: SettingsComponent},
        {path: 'search', component: SearchPageComponent},
    ], 
    // canActivate: [canActivateAuth]
},
    {path: 'login', component: LoginPageComponent},
];
