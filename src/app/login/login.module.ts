import { ForgetPasswordComponent } from './ForgetPassword/ForgetPassword.component';
import { InscriptionComponent } from './Inscription/Inscription.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './Login/Login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfosComponent } from './Inscription/Infos/Infos.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '../../../library/angular-admin-lte/src/lib/layout/layout.module';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    FlexLayoutModule,
    LayoutModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: [LoginComponent, InscriptionComponent, ForgetPasswordComponent, InfosComponent]
})
export class LoginModule { }
