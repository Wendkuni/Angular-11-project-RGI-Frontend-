import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommuneRoutingModule } from './commune-routing.module';
import { CommuneComponent } from './commune/commune.component';
import { CommuneEditComponent } from './commune-edit/commune-edit.component';


import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { DeletecommuneComponent } from './deletecommune/deletecommune.component';



@NgModule({
  declarations: [CommuneComponent,CommuneEditComponent, DeletecommuneComponent],
  imports: [
    CommonModule,
    CommuneRoutingModule,
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
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class CommuneModule { }
