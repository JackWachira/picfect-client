import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from '../app/home';
import { AuthComponent } from '../app/auth';

const routes: RouterConfig = [
  {path: 'home', component: HomeComponent},
  {path: '', component: AuthComponent}
];

export const appRouterProviders = [
  provideRouter(routes)
];