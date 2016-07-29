import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, appRouterProviders } from './app/';
import {HTTP_PROVIDERS} from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { HomeService } from './app/home/home.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ HTTP_PROVIDERS,AUTH_PROVIDERS, appRouterProviders, HomeService ]);

