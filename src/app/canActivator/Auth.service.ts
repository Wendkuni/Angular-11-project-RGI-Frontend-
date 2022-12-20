import { Injectable } from '@angular/core';
import { TokenStorageService } from '../shared/services/TokenStorage.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private token: TokenStorageService,
              private route: Router) {}


    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean
    {
        if ( this.token.getUser()) {
        return true;
        }
        else {
        this.route.navigate(['/']);
        }
    }
}
