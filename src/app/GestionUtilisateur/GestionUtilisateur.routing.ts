import { UtilisateurComponent } from './Utilisateur/Utilisateur.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthAdminService } from '../canActivator/authAdmin.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthAdminService],
    component: UtilisateurComponent
   },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
