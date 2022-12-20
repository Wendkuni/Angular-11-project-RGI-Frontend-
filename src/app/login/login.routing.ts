import { ForgetPasswordComponent } from './ForgetPassword/ForgetPassword.component';
import { InscriptionComponent } from './Inscription/Inscription.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './Login/Login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
   },
   {
    path: 'Inscription',
    component: InscriptionComponent
   },
   {
    path: 'ForgetPassword',
    component: ForgetPasswordComponent
   },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
