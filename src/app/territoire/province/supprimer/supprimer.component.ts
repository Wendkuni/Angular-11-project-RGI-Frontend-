import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subscriber } from 'rxjs';
import { ProvinceService } from './../../../shared/services/province.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private service: ProvinceService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  supprime() {
    this.service.deleteProvince(this.data.province.id).subscribe( 
      () => {},
      (err: HttpErrorResponse) => {
        console.log(err.status);
        if(err.status<399)
        {
          this.snackBar.open("province supprimer avec success", 'OK', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
        else
        {
          this.snackBar.open(err.error, 'OK', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      });    
  }
}
