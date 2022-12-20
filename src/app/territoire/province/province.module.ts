import { SupprimerComponent } from './supprimer/supprimer.component';
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

import { AddProvinceComponent } from './addProvince/addProvince.component';
import { ProvinceComponent } from './province/province.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceRoutingModule } from './province.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProvinceRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    MatCardModule

  ],
  declarations: [ProvinceComponent, AddProvinceComponent, SupprimerComponent]
})
export class ProvinceModule { }
