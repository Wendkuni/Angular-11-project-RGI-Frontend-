import { Injectable } from '@angular/core';
import { TokenStorageService } from '../shared/services/TokenStorage.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthMairieService {

  constructor(private token: TokenStorageService,
              private route: Router) {}


canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean
{
if ( this.token.getUser().roles[0].name === 'ROLE_MAIRIE' ||
      this.token.getUser().roles[0].name === 'ROLE_HAUT_COMMISSARIAT' ||
      this.token.getUser().roles[0].name === 'ROLE_GOUVERNORAT' ||
      this.token.getUser().roles[0].name === 'ROLE_ADMIN' || this.token.getUser().roles[0].name === 'ROLE_MATDS') {
return true;
}
else {
this.route.navigate(['/Error/400']);
}
}
}
