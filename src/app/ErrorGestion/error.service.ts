import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

constructor(private route: Router) { }

gestionErrorServeur(err: HttpErrorResponse)
{
        if (err.status === 0)
        {
            this.route.navigate(['/Error/500']);
        }
}

}
