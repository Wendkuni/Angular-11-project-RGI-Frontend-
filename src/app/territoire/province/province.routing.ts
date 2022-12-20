import { AuthGouvService } from './../../canActivator/authGouv.service';
import { ProvinceComponent } from './province/province.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGouvService],
    component: ProvinceComponent
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvinceRoutingModule { }
