import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { UtilisateurService } from 'src/app/shared/services/Utilisateur.service';

@Component({
  selector: 'app-ActiveOrDesactive',
  templateUrl: './ActiveOrDesactive.component.html',
  styleUrls: ['./ActiveOrDesactive.component.scss']
})
export class ActiveOrDesactiveComponent implements OnInit {
  
  isAction = true;
  isPiner = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private service : UtilisateurService,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ActiveOrDesactiveComponent>) {
                
    if ( data.utilisateur.password === '' || data.utilisateur.password === null)
    {
      this.isAction = false;
    }
   }

  ngOnInit() {
    //console.log(this.data);
  }

  ActiveOrDesactiv()
  {
    this.isPiner=true;
    if (this.isAction)
    {
      this.service.desactiverCompte(this.data.utilisateur.id).subscribe(
        (data) =>{
          console.log(data);
        },
        (err: HttpErrorResponse) => {
          this.isPiner=false;
          this.dialogRef.close();
          if (err.status < 400)
          {
            this.snackBar.open("Compte Desactiver avec succes", 'OK', {
              duration: 5000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
            
          }
          else{
            this.snackBar.open(err.error, 'OK', {
              duration: 5000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          }
        }
      );
    }
    else
    {
      this.service.activerCompte(this.data.utilisateur.id).subscribe(
        () =>{},
        (err: HttpErrorResponse) => {
          this.isPiner=false;
          this.dialogRef.close();
          if (err.status < 400)
          {
            
            this.snackBar.open("Compte Activer avec succes", 'OK', {
              duration: 5000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          }
          else{
            this.snackBar.open(err.error, 'OK', {
              duration: 5000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          }
        }
      );
    }
  }

}
