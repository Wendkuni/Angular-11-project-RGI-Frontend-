import { TokenStorageService } from './../../shared/services/TokenStorage.service';
import { startWith, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UtilisateurService } from 'src/app/shared/services/Utilisateur.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addCompte',
  templateUrl: './addCompte.component.html',
  styleUrls: ['./addCompte.component.scss']
})
export class AddCompteComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  isModif = false;
  isTerritoire = false;
  region: any = [];
  province: any = [];
  commune: any = [];
  regionOptions: Observable<any>;
  datas;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private service: UtilisateurService,
              private snackBar: MatSnackBar,
              private _formBuilder: FormBuilder,
              private token: TokenStorageService) {
                this.datas = token.getUser();
                this.iniForm();
               }

  ngOnInit() {
  }

  reset()
  {
    this.secondFormGroup.reset();
  }
  iniForm()
  {
    if (this.data.utilisateur)
    {
      this.isModif = true;
      this.secondFormGroup = this._formBuilder.group({
        nom: [this.data.utilisateur.nom, Validators.required],
        prenom: [this.data.utilisateur.prenom, Validators.required],
        userName: [this.data.utilisateur.username, Validators.required],
        telephone: [this.data.utilisateur.contact, Validators.required],
        pays: [this.data.utilisateur.pays, Validators.required],
        ville: [this.data.utilisateur.ville, Validators.required],
        emailP: [this.data.utilisateur.email, [Validators.required, Validators.email]],
      });
    }
    else
    {
      this.secondFormGroup = this._formBuilder.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        userName: ['', Validators.required],
        telephone: ['', Validators.required],
        pays: ['', Validators.required],
        ville: ['', Validators.required],
        emailP: ['', [Validators.required, Validators.email]],
      });
    }
    this.firstFormGroup = this._formBuilder.group({
      role: [''],
      territoire: [''],
      typeStructure: [this.datas.structure.structure, [Validators.required]],
      nomStructure: [this.datas.structure.nomStructure, Validators.required],
      codePostal: this.datas.structure.codePostal,
      email: [this.datas.structure.email, [Validators.required, Validators.email]],
      siteWeb: this.datas.structure.siteweb,
      contact: [this.datas.structure.contacte, Validators.required],
      appName: this.datas.structure.appName,
      description: this.datas.structure.description
    });
  }

openSubmitSnackbar(){
  if(this.data.utilisateur)
  {
    this.modifierStructure();
  }
  else
  {
    this.nouvelleStructure();
  }
}


nouvelleStructure()
{
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
    "role": this.firstFormGroup.get('role').value,
    "siteWeb": this.firstFormGroup.get('siteWeb').value,
    "telephone": this.secondFormGroup.get('telephone').value,
    "territoire": this.firstFormGroup.get('territoire').value,
    "typeStructure": this.firstFormGroup.get('typeStructure').value,
    "username":this.secondFormGroup.get('userName').value,
    "ville": this.secondFormGroup.get('ville').value,
  };

  this.service.createStructure(structure).subscribe(data => {
    console.log(data);
  },
  (err: HttpErrorResponse) =>{
    if(err.status < 400)
    {
      this.snackBar.open('Compte enregistrer ', 'ok' , { duration: 10000 });
    }
    else {
      this.snackBar.open(err.error, 'ok' , { duration: 10000 });
    }

  });
}

modifierStructure()
{
  let structure = {
    "idStructure": this.data.utilisateur.structure.idStructure,
    "idUtilisateur": this.data.utilisateur.id,
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
    "role": this.firstFormGroup.get('role').value,
    "siteWeb": this.firstFormGroup.get('siteWeb').value,
    "telephone": this.secondFormGroup.get('telephone').value,
    "territoire": this.firstFormGroup.get('territoire').value,
    "typeStructure": this.firstFormGroup.get('typeStructure').value,
    "username":this.secondFormGroup.get('userName').value,
    "ville": this.secondFormGroup.get('ville').value,
  };

  this.service.updateCompte(structure).subscribe(data => {

  },
  (err: HttpErrorResponse) => {
    if(err.status < 400)
    {
      this.snackBar.open('Compte Modifier ', 'ok' , { duration: 10000 });
    }
    else {
      this.snackBar.open(err.error, 'ok' , { duration: 10000 });
    }

  });
}

}
