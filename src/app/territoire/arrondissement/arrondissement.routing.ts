import { AuthMairieService } from './../../canActivator/authMairie.service';
import { NgModule } from '@angular/core';
import { ArrondissementComponent } from './arrondissement/arrondissement.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthMairieService],
    component: ArrondissementComponent
   },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrondissementRoutingModule { }
