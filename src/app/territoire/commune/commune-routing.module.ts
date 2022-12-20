import { AuthHautService } from './../../canActivator/authHaut.service';
import { NgModule } from '@angular/core';
import{CommuneComponent} from './commune/commune.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    canActivate: [AuthHautService],
    component: CommuneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommuneRoutingModule { }
