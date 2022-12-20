import { TokenStorageService } from './../../../shared/services/TokenStorage.service';
import { Router } from '@angular/router';
import { startWith, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Arrondissement } from './../../../shared/models/Arrondissement';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArrondissementService } from './../../../shared/services/arrondissement.service';
import { Commune } from './../../../shared/models/Commune';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-updateArrondissement',
  templateUrl: './updateArrondissement.component.html',
  styleUrls: ['./updateArrondissement.component.css']
})
export class UpdateArrondissementComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  myControl = new FormControl();
  commune: any = [];
  communeOptions: Observable<Commune[]>;
  formulaireArondissement: FormGroup;
  isAct = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private service: ArrondissementService,
              private snackBar: MatSnackBar,
              private route: Router,
              private token: TokenStorageService) {
                this.getCommune();
                this.init();
              }

  ngOnInit() {
    if(this.token.getUser().roles[0].name === 'ROLE_MAIRIE')
    {
      this.isAct = false;
      this.formulaireArondissement.get('commune').setValue(this.token.getUser().structure.commune.libelle);
    }
    this.communeOptions = this.formulaireArondissement.get('commune').valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
    map(value => this.filterregion(value)));
  }

  init() {
    if(this.data.arrondissement){
     this.formulaireArondissement = this.fb.group({
       id: this.data.arrondissement.id,
       libelle : [this.data.arrondissement.libelle, Validators.required],
       code: [this.data.arrondissement.code, [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
       commune: [this.data.arrondissement.commune.libelle, Validators.required],
     });
    }
    else{
     this.formulaireArondissement = this.fb.group({
       libelle : ['', Validators.required],
       code: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
       commune: ['', Validators.required],
     });
    }
 }
 getCommune()
  {
    this.service.getAllCommune().subscribe( response => {
        this.commune = response;
    });
  }

 private filterregion(value: string): Commune[]  {
  const filterValue = value.toLowerCase();
  return this.commune.filter( r => r.libelle.toLowerCase().indexOf(filterValue) === 0);
}


ngOnSubmit() {
  if (this.data.arrondissement){
    if(this.token.getUser().roles[0].name === 'ROLE_MAIRIE')
    {
      this.formulaireArondissement.get('commune').setValue(this.data.arrondissement.commune.libelle);
    }
    this.service.updateArrondissement(this.formulaireArondissement.value).subscribe(
      () => {},
      (err: HttpErrorResponse) => {
        if(err.status<399)
        {
          this.snackBar.open("Arrondissement modifier avec success", 'OK', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
        else if (err.status === 0)
        {
            this.route.navigate(['/Error/400']);
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
  else {
        this.service.addArrondissement(this.formulaireArondissement.value).subscribe(
          () => {},
          (err: HttpErrorResponse) => {
            if(err.status<399)
            {
              this.snackBar.open("Arrondissement enregistrer avec success", 'OK', {
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

}
