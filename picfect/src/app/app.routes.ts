import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from '../app/home';
import { AuthComponent } from '../app/auth';
import { AuthGuard } from './auth/auth-guard.service';

const routes: RouterConfig = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: AuthComponent}
];

export const appRouterProviders = [
  provideRouter(routes),
  AuthGuard
];