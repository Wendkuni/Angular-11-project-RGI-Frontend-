import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { RegionService } from '../../../shared/services/region.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Supprimer',
  templateUrl: './Supprimer.component.html',
  styleUrls: ['./Supprimer.component.css']
})
export class SupprimerComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
               private snackBar: MatSnackBar,
               private service: RegionService) { }

  ngOnInit() {
  }
  supprime(){
    this.service.deleteRegion(this.data.region.id).subscribe(  () => {},
    (err: HttpErrorResponse) => {
      console.log(err.status);
      if(err.status<399)
      {
        this.snackBar.open("Region supprimer avec success", 'OK', {
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
