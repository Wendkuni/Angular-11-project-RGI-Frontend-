import { TokenStorageService } from './../shared/services/TokenStorage.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthApplicatifService {

  constructor(private token: TokenStorageService,
              private route: Router) {}


canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean
{
        if ( this.token.getUser().roles[0].name === 'APPLICATIF') {
          return true;
        }
        else {
          this.route.navigate(['/Error/400']);
        }
    }
}
