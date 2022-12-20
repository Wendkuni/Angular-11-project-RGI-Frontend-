import { TokenStorageService } from './../../../shared/services/TokenStorage.service';
import { Region } from './../../../shared/models/Region';
import { ProvinceService } from './../../../shared/services/province.service';

import { Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { startWith, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addProvince',
  templateUrl: './addProvince.component.html',
  styleUrls: ['./addProvince.component.css']
})
export class AddProvinceComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  myControl = new FormControl();
  region: any = [];
  regionOptions: Observable<Region[]>;
  formulaireProvince: FormGroup;
  isAct = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private provinceService: ProvinceService,
              private snackBar: MatSnackBar,
              private token: TokenStorageService) {
                this.init();
                this.getRegion();
             }

            ngOnInit() {
              if(this.token.getUser().roles[0].name === 'ROLE_GOUVERNORAT')
              {
                this.isAct = false;
                this.formulaireProvince.get('region').setValue(this.token.getUser().structure.region.libelle);
              }
              this.regionOptions = this.formulaireProvince.get('region').valueChanges.pipe(
                startWith(''),
                debounceTime(4),
                distinctUntilChanged(),
              map(value => this.filterregion(value)));
            }

            init() {
               if(this.data.province){
                this.formulaireProvince = this.fb.group({
                  id: this.data.province.id,
                  libelle : [this.data.province.libelle, Validators.required],
                  code: [this.data.province.code, [Validators.required, Validators.maxLength(2)]],
                  chefLieu: [this.data.province.chefLieu, Validators.required],
                  region: [this.data.province.region.libelle, Validators.required],
                });
               }
               else{
                this.formulaireProvince = this.fb.group({
                  libelle : ['', Validators.required],
                  code: ['', [Validators.required, Validators.maxLength(2)]],
                  chefLieu: ['', Validators.required],
                  region: ['', Validators.required],
                });
               }
            }

            getRegion()
            {
              this.provinceService.getAllRegion().subscribe( response => {
                  this.region = response;
              });
            }


            private filterregion(value: string): Region[]  {
              const filterValue = value.toLowerCase();
               return this.region.filter( r => r.libelle.toLowerCase().indexOf(filterValue) === 0);
            }


            ngOnSubmit() {
                if(this.data.province){
                  if(this.token.getUser().roles[0].name === 'ROLE_GOUVERNORAT')
                  {
                    this.formulaireProvince.get('region').setValue(this.data.province.region.libelle);
                  }
                  this.provinceService.updateProvince(this.formulaireProvince.value).subscribe(
                    () => {},
                    (err: HttpErrorResponse) => {
                      if(err.status<400)
                      {
                        this.snackBar.open("province modifier avec success", 'OK', {
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
                    this.provinceService.addProvince(this.formulaireProvince.value).subscribe(
                      () => {},
                      (err: HttpErrorResponse) => {
                        if(err.status<399)
                        {
                          this.snackBar.open("province enregistrer avec success", 'OK', {
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
