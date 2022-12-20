import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArrondissementService } from './../../../shared/services/arrondissement.service';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-deleteArrondissement',
  templateUrl: './deleteArrondissement.component.html',
  styleUrls: ['./deleteArrondissement.component.css']
})
export class DeleteArrondissementComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private service: ArrondissementService,
              private snackBar: MatSnackBar,
              private route: Router) { }

  ngOnInit() {
  }

  supprime() {
    this.service.deleteArrondissement(this.data.arrondissement.id).subscribe(
      () => {},
      (err: HttpErrorResponse) => {
        if(err.status<399)
        {
          this.snackBar.open("Arrondissement supprimer avec success", 'OK', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
        else if (err.status === 0)
        {
            this.route.navigate(['/Error/400']);
        }
        else
        {
          this.snackBar.open(err.error, 'OK', {
            duration: 10000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      });
  }

}
