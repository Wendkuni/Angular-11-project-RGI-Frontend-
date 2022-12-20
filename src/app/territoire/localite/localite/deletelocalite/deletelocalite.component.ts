import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LocaliteService } from 'src/app/shared/services/localite.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-deletelocalite',
  templateUrl: './deletelocalite.component.html',
  styleUrls: ['./deletelocalite.component.css']
})
export class DeletelocaliteComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,

  private localiteService:LocaliteService,private dialogMat: MatDialog,
  private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  supprimer(){

    this.localiteService.deleteLocalite(this.data.localite.id).subscribe( () => {},
    (err: HttpErrorResponse) => {
      console.log(err.status);
      if(err.status<399)
      {
        this.snackBar.open("Localité supprimer avec success", 'OK', {
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
