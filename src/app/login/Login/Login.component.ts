import { InscriptionComponent } from './../Inscription/Inscription.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ErrorHandler } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{LoginService} from '../../shared/services/login.service'
import { error } from '@angular/compiler/src/util';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from 'src/app/shared/services/TokenStorage.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  hide = true;

  user: FormGroup;
  usr;


  constructor(private dialogMat: MatDialog,
              private login: LoginService,
              private fromBulder: FormBuilder,
              private token: TokenStorageService,
              private snackBar: MatSnackBar,
              private route: Router) {

               }

  ngOnInit() {
    this.init();
    this.token.signOut();
  }

  init(){
    this.user = this.fromBulder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Onsubmit(){
    this.login.login(this.user.value).subscribe(
      (data) =>{
        this.token.saveToken(data.accessToken);

        this.usr = this.token.getUser();
        this.login.findUtilisateurById(data.id).subscribe(
          (userC) => {
            this.token.saveUser(userC);
          }
        );
        this.snackBar.open("Connecte au systeme", 'OK', {
          duration: 5000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.setMenu(this.user.get('username').value);
      },
      (err: HttpErrorResponse) =>{
          if(err.status >399){

            this.snackBar.open("Erreur d'authentification ", 'OK', {
              duration: 5000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition

          });
          }
      }

    )

  }

  register() {
    const mat = this.dialogMat.open(InscriptionComponent,
      {width: '750px', data: { }, disableClose: true}
      );
    mat.afterClosed().subscribe(() => {
    });
  }


  setMenu(user)
  {

      this.login.getMenu(user).subscribe(
        data => {
          const menu: any = data;
          this.token.setMenu(data);
          this.route.navigate(['/Home/Acceuil']);
        }
      );
  }
}
