import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../shared/services/TokenStorage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGouvService {

  constructor(private token: TokenStorageService,
              private route: Router) {}


canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean
{
if ( this.token.getUser().roles[0].name === 'ROLE_GOUVERNORAT' ||
     this.token.getUser().roles[0].name === 'ROLE_ADMIN' || this.token.getUser().roles[0].name === 'ROLE_MATDS') {
return true;
}
else {
this.route.navigate(['/Error/400']);
}
}
}
