import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { DeleteCompteComponent } from './DeleteCompte/DeleteCompte.component';
import { AddOrUpdateComponent } from './AddOrUpdate/AddOrUpdate.component';
import { ActiveOrDesactiveComponent } from './ActiveOrDesactive/ActiveOrDesactive.component';
import { UtilisateurRoutingModule } from './GestionUtilisateur.routing';
import { UtilisateurComponent } from './Utilisateur/Utilisateur.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
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
    MatCardModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatStepperModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  declarations: [UtilisateurComponent, ActiveOrDesactiveComponent, AddOrUpdateComponent, DeleteCompteComponent]
})
export class GestionUtilisateurModule { }
