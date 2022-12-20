import { TokenStorageService } from './../../../shared/services/TokenStorage.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommuneService } from 'src/app/shared/services/commune.service';
import { map, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Commune } from 'src/app/shared/models/Commune';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-commune-edit',
  templateUrl: './commune-edit.component.html',
  styleUrls: ['./commune-edit.component.css']
})
export class CommuneEditComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  myControl = new FormControl();
  province: any=[];
  provinceOptions: Observable<any[]>;
  formulaireCommune : FormGroup;
  isAct = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private _fb: FormBuilder,
              private communeService: CommuneService,
              private snackBar: MatSnackBar,
              private token: TokenStorageService) {
                this.init();
                this.getProvince();
             }


             ngOnInit() {
              if(this.token.getUser().roles[0].name === 'ROLE_HAUT_COMMISSARIAT')
              {
                this.isAct = false;
                this.formulaireCommune.get('province').setValue(this.token.getUser().structure.province.libelle);
              }
              else{
                this.getProvince();
                this.provinceOptions = this.formulaireCommune.get('province').valueChanges.pipe(
                  startWith(''),
                  debounceTime(400),
                  distinctUntilChanged(),
                map(value =>this.filterprovince(value)));
              }
            }

            init() {
              if(this.data.commune){
               this.formulaireCommune= this._fb.group({
                 id: this.data.commune.id,
                 libelle: [this.data.commune.libelle, Validators.required],
                 code: [this.data.commune.code, [Validators.required, Validators.minLength(2)]],
                 type:[this.data.commune.type, Validators.required],
                 province: [this.data.commune.province.libelle, Validators.required],
               });
              }
              else{
               this.formulaireCommune = this._fb.group({
                 libelle : ['', Validators.required],
                 code: ['', [Validators.required, Validators.minLength(2)]],
                 type: ['',Validators.required],
                 province:['',Validators.required],
               });
              }
           }



           private filterprovince(value: string) : Commune[]  {
            const filterValue = value.toLowerCase();
             return this.province.filter(r => r.libelle.toLowerCase().indexOf(filterValue)===0);
          }
            getProvince()
            {
              this.communeService.getAllProvince().subscribe( response => {
                  this.province = response;
              });
}

ngOnSubmit() {
  if(this.data.commune){
    if(this.token.getUser().roles[0].name === 'ROLE_HAUT_COMMISSARIAT')
    {
      this.formulaireCommune.get('province').setValue(this.data.commune.province.libelle);
    }
    this.communeService.updateCommune(this.formulaireCommune.value).subscribe(() => {},
    (err: HttpErrorResponse) => {
      if(err.status<400)
      {
        this.snackBar.open("Commune modifier avec success", 'OK', {
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
  else {
      this.communeService.addCommune(this.formulaireCommune.value).subscribe(() => {},
    (err: HttpErrorResponse) => {
      if(err.status<400)
      {
        this.snackBar.open("Commune enregistre avec success", 'OK', {
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
