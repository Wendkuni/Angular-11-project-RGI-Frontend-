import { Router } from '@angular/router';
import { PROFILEService } from './../PROFILE.service';
import { adminLteConf } from './../../admin-lte.conf';
import { colors } from './../../../../library/angular-admin-lte/src/lib/color/color.definition';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from './../../shared/services/TokenStorage.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-UpdateProfile',
  templateUrl: './UpdateProfile.component.html',
  styleUrls: ['./UpdateProfile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  user: FormGroup;
  structure: FormGroup;
  isEditable = true;
  userDetail;
  structureDetail;
  hide = true;
  hideC = true;
  type;

  constructor(private _formBuilder: FormBuilder,
              private snackbar: MatSnackBar,
              private token: TokenStorageService,
              private updateService: LoginService,
              private profile: PROFILEService,
              private route: Router) {
                    this.userDetail = this.token.getUser();
                    this.structureDetail = this.userDetail.structure;
                    this.type = profile.getType();
               }

  ngOnInit() {
    this.user = this._formBuilder.group({
      id : this.userDetail.id,
      username: this.userDetail.username,
      nom: [this.userDetail.nom, Validators.required],
      prenom: [this.userDetail.prenom, Validators.required],
      password: ['secret', Validators.required],
      confirm: ['secret', Validators.required],
      ville: [this.userDetail.ville, Validators.required],
      pays: [this.userDetail.pays, Validators.required],
      contact: [this.userDetail.contact, Validators.required],
      email: [this.userDetail.email, [Validators.required, Validators.email]]
    });


    this.structure = this._formBuilder.group({
      id: this.structureDetail.idStructure,
      typeStructure: [ this.structureDetail.structure, [Validators.required]],
      nomStructure: [this.structureDetail.nomStructure, Validators.required],
      codePostal: [this.structureDetail.codePostal, Validators.required],
      email: [this.structureDetail.email, [Validators.required, Validators.email]],
      siteweb: [this.structureDetail.siteweb],
      contact: [this.structureDetail.contacte, Validators.required],
      appName: [this.structureDetail.appName],
      description: [this.structureDetail.description]
    });
  }

  openSubmitSnackbar(){
    let pass = '';
    if ( this.user.get('password').value !== 'secret')
    {
      pass = this.user.get('password').value;
    }
    const profile = {
      idUtilisateur: this.user.get('id').value,
      nom : this.user.get('nom').value,
      prenom : this.user.get('prenom').value,
      password: pass,
      idStructure: this.structure.get('id').value,
      typeStructure: this.structure.get('typeStructure').value,
      nomStructure: this.structure.get('nomStructure').value,
      codePostal: this.structure.get('codePostal').value,
      email: this.structure.get('email').value,
      siteweb: this.structure.get('siteweb').value,
      contact: String(this.structure.get('contact').value),
      description: this.structure.get('description').value,
      ville: this.user.get('ville').value,
      pays: this.user.get('pays').value,
      contactP: this.user.get('contact').value,
      emailP: this.user.get('email').value,
      username: this.user.get('username').value
    };

    console.log(profile);
    this.updateService.updateProfile(profile).subscribe(
      data => {
        const donne: any = data;
        if(donne.accessToken)
          {
            this.token.saveToken(donne.accessToken);

            this.updateService.findUtilisateurById(donne.id).subscribe(
              (userC) =>
              {
                this.token.saveUser(userC);
              }
            );
          }
          else {
            this.token.saveUser(donne);
          }
        this.snackbar.open('Information Modifier avec susces', 'OK' , { duration: 5000 });
        if(this.type === 1)
        {
          this.route.navigate(['/Home/Profile/ProfileUtilisateur']);
        }
        else
        {
          this.route.navigate(['/Home/Profile/ProfileStructure']);
        }
      },
      (err: HttpErrorResponse) => {
        if ( err.status > 399 && err.status < 500)
        {
          this.snackbar.open(err.error, '' ,{ duration: 1000 });
        }
        else if ( err.status >= 500) {
          this.snackbar.open('error Server', '' , { duration: 1000 });
        }
      }
    );

  }
}
