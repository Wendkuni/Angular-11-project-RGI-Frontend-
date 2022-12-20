import { SupprimerCompteComponent } from './pages/SupprimerCompte/SupprimerCompte.component';
import { AddCompteComponent } from './pages/addCompte/addCompte.component';
import { CompteUserComponent } from './pages/CompteUser/CompteUser.component';
import { MenuGestionModule } from './MenuGestion/MenuGestion.module';
import { authInterceptorProviders } from './shared/intercepte/AuthInterceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocaliteModule } from './territoire/localite/localite/localite.module';
import { HomePageComponent } from './pages/HomePage/HomePage.component';

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
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { environment } from '../environments/environment';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule, BrowserAnimationsModule, LocaliteModule,
    MenuGestionModule,
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
    MatExpansionModule,
    MatGridListModule,
    FlexLayoutModule,
    LayoutModule,
  ],
  declarations: [
    AppComponent,
      HomePageComponent,
      CompteUserComponent,
      AddCompteComponent,
      SupprimerCompteComponent,

   ],
  bootstrap: [AppComponent],
  providers: [authInterceptorProviders],
})
export class AppModule {}
