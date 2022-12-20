import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InfosComponent } from './Infos/Infos.component';

@Component({
  selector: 'app-Inscription',
  templateUrl: './Inscription.component.html',
  styleUrls: ['./Inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  isTerritoire = false;
  region: any = [];
  province: any = [];
  commune: any = [];
  regionOptions: Observable<any>;
  hide = true;
  hideC = true;

  constructor(private _formBuilder: FormBuilder,
              private snackbar: MatSnackBar,
              private dialogMat: MatDialog,
              private services: LoginService,
              private route: Router) { }

  ngOnInit() {

    this.secondFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      userName: ['', Validators.required],
      telephone: ['', Validators.required],
      pays: ['', Validators.required],
      ville: ['', Validators.required],
      emailP: ['', [Validators.required, Validators.email]],
    });
    this.firstFormGroup = this._formBuilder.group({
      typeStructure: ['', [Validators.required]],
      nomStructure: ['', Validators.required],
      codePostal: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      siteWeb: ['', Validators.required],
      contact: ['', Validators.required],
      appName: null,
      description: null
    });

  }

  openSubmitSnackbar(){
    let structure = {
      "appName": this.firstFormGroup.get('appName').value,
      "codePostal": this.firstFormGroup.get('codePostal').value,
      "contact": this.firstFormGroup.get('contact').value,
      "description": this.firstFormGroup.get('description').value,
      "email": this.firstFormGroup.get('email').value,
      "emailP": this.secondFormGroup.get('emailP').value,
      "nom": this.secondFormGroup.get('nom').value,
      "nomStructure": this.firstFormGroup.get('nomStructure').value,
      "pays": this.secondFormGroup.get('pays').value,
      "prenom":this.secondFormGroup.get('prenom').value,
      "role": "APPLICATIF",
      "siteWeb": this.firstFormGroup.get('siteWeb').value,
      "telephone": this.secondFormGroup.get('telephone').value,
      "territoire": "",
      "typeStructure": this.firstFormGroup.get('typeStructure').value,
      "username":this.secondFormGroup.get('userName').value,
      "ville": this.secondFormGroup.get('ville').value,
    };
    console.log(structure);
    this.services.createStructure(structure).subscribe(data => {
      console.log(data);
    },
    (err: HttpErrorResponse) =>{
      if (err.status < 399)
      {
        const dialogRef = this.dialogMat.open(InfosComponent, {
          width: '600px',
          disableClose: true,
          } );
      }
      else {
        this.snackbar.open(err.error, 'ok' , { duration: 10000 });
      }

    });


  }

  resetClic(){

    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
  }


}


