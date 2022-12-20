import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region.component';
import { RegionRoutingModule } from './region.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AjouterComponent } from './ajouter/ajouter.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SupprimerComponent } from './Supprimer/Supprimer.component';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';



@NgModule({
  imports: [
    CommonModule,
    RegionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    ExcelExportModule
  ],
  declarations: [RegionComponent, AjouterComponent, SupprimerComponent]
})
export class RegionModule { }
