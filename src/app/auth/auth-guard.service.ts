import { Injectable }             from '@angular/core';
import { CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot }    from '@angular/router';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Http, Headers, HTTP_PROVIDERS } from '@angular/http';

@Injectable()
export class AuthGuard implements CanActivate {
    access_token = "";
    constructor(private router: Router, private http: Http) {
        this.access_token = localStorage.getItem('id_token');
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.access_token) {
            return true
        } else {
            // Navigate to the login page
            this.router.navigate(['']);
            return false;
        }
    }
}