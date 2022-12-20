import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegionService } from '../../../shared/services/region.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  myControl = new FormControl();

  formulaireRegion: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private regionService: RegionService,
              private snackBar: MatSnackBar) {
                this.init();
             }

            ngOnInit() {
                this.init();
            }

            init() {
               if (this.data.region){
                this.formulaireRegion = this.fb.group({
                  id: this.data.region.id,
                  libelle : [this.data.region.libelle, Validators.required],
                  code: [this.data.region.code, [Validators.required, Validators.minLength(2)]],
                  chefLieu: [this.data.region.chefLieu, Validators.required],

                });
               }
               else{
                this.formulaireRegion = this.fb.group({
                  libelle : ['', Validators.required],
                  code: ['', [Validators.required, Validators.minLength(2)]],
                  chefLieu: ['', Validators.required],

                });
               }
            }



            ngOnSubmit() {

                if (this.data.region){
                  this.regionService.updateRegion(this.formulaireRegion.value).subscribe(
                    () => {},
                    (err: HttpErrorResponse) => {
                      if(err.status<400)
                      {
                        this.snackBar.open("Region modifier avec success", 'OK', {
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
                  this.regionService.addRegion(this.formulaireRegion.value).subscribe(() => {},
                  (err: HttpErrorResponse) => {
                    if(err.status<400)
                    {
                      this.snackBar.open( " Region enregistrer avec success " , 'OK', {
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



