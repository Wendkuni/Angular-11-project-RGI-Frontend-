import { AuthMairieService } from './../../../canActivator/authMairie.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocaliteComponent } from './localite/localite.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthMairieService],
    component: LocaliteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocaliteRoutingModule { }
