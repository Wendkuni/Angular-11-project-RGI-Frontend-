import { UpdateArrondissementComponent } from './updateArrondissement/updateArrondissement.component';
import { DeleteArrondissementComponent } from './deleteArrondissement/deleteArrondissement.component';
import { ArrondissementComponent } from './arrondissement/arrondissement.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrondissementRoutingModule } from './arrondissement.routing';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    ArrondissementRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSnackBarModule,
    MatCardModule
  ],
  declarations: [ArrondissementComponent, DeleteArrondissementComponent, UpdateArrondissementComponent]
})
export class ArrondissementModule { }
