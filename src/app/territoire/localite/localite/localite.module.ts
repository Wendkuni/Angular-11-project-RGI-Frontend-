import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocaliteRoutingModule } from './localite-routing.module';
import { LocaliteComponent } from './localite/localite.component';
import { AddlocaliteComponent } from './addlocalite/addlocalite.component';
import { DeletelocaliteComponent } from './deletelocalite/deletelocalite.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [LocaliteComponent, AddlocaliteComponent, DeletelocaliteComponent],
  imports: [
    CommonModule,
    LocaliteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class LocaliteModule { }
