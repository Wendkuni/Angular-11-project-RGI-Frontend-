import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilisateurService } from 'src/app/shared/services/Utilisateur.service';

@Component({
  selector: 'app-SupprimerCompte',
  templateUrl: './SupprimerCompte.component.html',
  styleUrls: ['./SupprimerCompte.component.scss']
})
export class SupprimerCompteComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private service: UtilisateurService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  supprimer()
  {
    this.service.supprimerUser(this.data.utilisateur.id).subscribe(
      (data)=>{},
      (err: HttpErrorResponse) => {
        if (err.status < 400)
          {
            this.snackBar.open("Compte Supprimer avec succes", 'OK', {
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
    )
  }

}
