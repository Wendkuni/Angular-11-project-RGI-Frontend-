import { MatCardModule } from '@angular/material/card';
import { ErrorRoutingModule } from './Error.routing';
import { Error500Component } from './Error500/Error500.component';
import { Error400Component } from './Error400/Error400.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule,
    MatCardModule
  ],
  declarations: [Error400Component, Error500Component]
})
export class ErrorGestionModule { }
