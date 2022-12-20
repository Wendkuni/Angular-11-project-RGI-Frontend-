import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocaliteService } from 'src/app/shared/services/localite.service';
import { startWith, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Localite } from 'src/app/shared/models/Localite';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addlocalite',
  templateUrl: './addlocalite.component.html',
  styleUrls: ['./addlocalite.component.css']
})
export class AddlocaliteComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  myControl = new FormControl();
  Arrondissement: any=[];
  arrondissemnentOptions: Observable<any[]>;
  formulaireLocalite : FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private _fb: FormBuilder,
              private localiteService: LocaliteService,
              private snackBar: MatSnackBar) {
                this.getArrondissement()
             }


             ngOnInit() {
              this.init();
              this.getArrondissement();
              this.arrondissemnentOptions = this.formulaireLocalite.get('arrondissement').valueChanges.pipe(
                startWith(''),
                debounceTime(400),
                distinctUntilChanged(),
              map(value =>this.filterArrondissement(value)));
            }

            init() {
              if(this.data.localite){
               this.formulaireLocalite= this._fb.group({
                 id: this.data.localite.id,
                 code: [this.data.localite.code, [Validators.required, Validators.minLength(2)]],
                 libelle: [this.data.localite.libelle, Validators.required],
                 type:[this.data.localite.type, Validators.required],
                 arrondissement: [this.data.localite.arrondissement.libelle, Validators.required],
               });
              }
              else{
               this.formulaireLocalite = this._fb.group({
                code: ['', [Validators.required, Validators.minLength(2)]],
                 libelle : ['', Validators.required],
                 type: ['',Validators.required],
                 arrondissement:['',Validators.required],
               });
              }
           }



           private filterArrondissement(value: string) : Localite[]  {
            const filterValue = value.toLowerCase();
             return this.Arrondissement.filter(r => r.libelle.toLowerCase().indexOf(filterValue)===0);
          }
            getArrondissement()
            {
              this.localiteService.getAllArrondissement().subscribe( response => {
                  this.Arrondissement = response;
              });
}

ngOnSubmit() {
    if(this.data.localite){
      this.localiteService.updateLocalite(this.formulaireLocalite.value).subscribe(() => {},
      (err: HttpErrorResponse) => {
        if(err.status<400)
        {
          this.snackBar.open("Localité modifier avec success", 'OK', {
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
    this.localiteService.addLocalite(this.formulaireLocalite.value).subscribe(() => {},
    (err: HttpErrorResponse) => {
      if(err.status<400)
      {
        this.snackBar.open("Localité enregistre avec success", 'OK', {
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
