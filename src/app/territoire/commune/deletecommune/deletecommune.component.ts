import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CommuneService } from 'src/app/shared/services/commune.service';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-deletecommune',
  templateUrl: './deletecommune.component.html',
  styleUrls: ['./deletecommune.component.css']
})
export class DeletecommuneComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,

  private communeService:CommuneService,private dialogMat: MatDialog,
  private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  supprimer(){

    this.communeService.deleteCommune(this.data.commune.id).subscribe( () => {},
    (err: HttpErrorResponse) => {
      console.log(err.status);
      if(err.status<399)
      {
        this.snackBar.open("Commune supprimer avec success", 'OK', {
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
