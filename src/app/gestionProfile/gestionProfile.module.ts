import { AuthService } from './../canActivator/Auth.service';
import { UpdateProfileComponent } from './UpdateProfile/UpdateProfile.component';
import { ProfileComponent } from './Profile/Profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionProfileRoutingModule } from './GestionProfile.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { authInterceptorProviders } from '../shared/intercepte/AuthInterceptor.service';
import {MatTabsModule} from '@angular/material/tabs';
import { ProfileUtilisateurComponent } from './ProfileUtilisateur/ProfileUtilisateur.component';
import { AlertModule as MkAlertModule, BoxModule } from 'angular-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    GestionProfileRoutingModule,
    FormsModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatTabsModule,
    MkAlertModule,
    BoxModule,
  ],
  declarations: [ProfileComponent, UpdateProfileComponent, ProfileUtilisateurComponent],
  providers: [authInterceptorProviders],
})
export class GestionProfileModule { }
