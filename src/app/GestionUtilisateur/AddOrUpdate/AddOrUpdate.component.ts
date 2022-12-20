import { HttpErrorResponse } from '@angular/common/http';
import { startWith, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilisateurService } from './../../shared/services/Utilisateur.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-AddOrUpdate',
  templateUrl: './AddOrUpdate.component.html',
  styleUrls: ['./AddOrUpdate.component.scss']
})
export class AddOrUpdateComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  isModif = false;
  isTerritoire = false;
  region: any = [];
  province: any = [];
  commune: any = [];
  regionOptions: Observable<any>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private service: UtilisateurService,
              private snackBar: MatSnackBar,
              private _formBuilder: FormBuilder) {
                this.iniForm();
                this.getRegion();
               }

  ngOnInit() {
  }

  reset()
  {
    this.firstFormGroup.reset();
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
      this.firstFormGroup = this._formBuilder.group({
        role: [this.data.utilisateur.roles[0].name],
        territoire: [],
        typeStructure: [this.data.utilisateur.structure.structure, [Validators.required]],
        nomStructure: [this.data.utilisateur.structure.nomStructure, Validators.required],
        codePostal: this.data.utilisateur.structure.codePostal,
        email: [this.data.utilisateur.structure.email, [Validators.required, Validators.email]],
        siteWeb: this.data.utilisateur.structure.siteweb,
        contact: [this.data.utilisateur.structure.contacte, Validators.required],
        appName: this.data.utilisateur.structure.appName,
        description: this.data.utilisateur.structure.description
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
      this.firstFormGroup = this._formBuilder.group({
        role: ['', Validators.required],
        territoire: ['', Validators.required],
        typeStructure: ['', [Validators.required]],
        nomStructure: ['', Validators.required],
        codePostal: null,
        email: ['', [Validators.required, Validators.email]],
        siteWeb: null,
        contact: ['', Validators.required],
        appName: null,
        description: null
      });
    }
  }
  private filterregion(value: string, liste): any  {
    const filterValue = value.toLowerCase();
    return liste.filter( r => r.libelle.toLowerCase().indexOf(filterValue) === 0);
  }

  filterElement(list) {
    this.regionOptions = this.firstFormGroup.get('territoire').valueChanges.pipe(
      startWith(''),
      debounceTime(4),
      distinctUntilChanged(),
    map(value => this.filterregion(value, list)));
  }

  getRegion()
  {
    this.service.getRegion().subscribe(
      data => {
        this.region = data;
        this.getProvince();
      }
    );
  }
  getProvince()
  {
    this.service.getProvince().subscribe(
      data => {
        this.province = data;
        this.getCommune();
      }
    );
  }

  getCommune()
  {
    this.service.getCommune().subscribe(
      data => {
        this.commune = data;
      }
    );
  }

  recupTerritoire(value){
    if(value === 'GOUVERNORAT')
    {
      if (this.region.length < 1)
      {
        this.snackBar.open('Pas de region à selectionner', 'ok' , { duration: 10000 });
      }
      else
      {
        this.isTerritoire = true;
        this.firstFormGroup.get('territoire').setValue('');
        this.filterElement(this.region);
      }
      this.firstFormGroup.get('territoire').setValue('');
    }
    else if(value === 'HAUT-COMMISSARIAT') {
      if (this.province.length < 1)
      {
        this.snackBar.open('Pas de province à selectionner', 'ok' , { duration: 10000 });
      }
      else
      {
        this.isTerritoire = true;
        this.firstFormGroup.get('territoire').setValue('');
        this.filterElement(this.province);
      }
      this.firstFormGroup.get('territoire').setValue('');
    }

    else if(value=== 'MAIRIE') {
      if (this.commune.length < 1)
      {
        this.snackBar.open('Pas de commune à selectionner', 'ok' , { duration: 10000 });
      }
      else{
        this.isTerritoire = true;
        this.filterElement(this.commune);
      }
      this.firstFormGroup.get('territoire').setValue('');
    }

    else
    {
      this.isTerritoire = false;
      this.firstFormGroup.get('territoire').setValue('nean');
    }

}

openSubmitSnackbar(){
  if(this.data.utilisateur)
  {
    this.modifierStructure();
    console.log(this.data.utilisateur.id);
    console.log(this.data.utilisateur.structure.idStructure);
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
  console.log(structure);
  this.service.createStructureAdmin(structure).subscribe(data => {
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
  console.log(structure);
  this.service.updateCompte(structure).subscribe(data => {
    console.log(data);
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
