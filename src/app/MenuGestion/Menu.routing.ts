import { MenuGestionComponent } from './MenuGestion.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthService } from '../canActivator/Auth.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthService],
    component: MenuGestionComponent
   },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
