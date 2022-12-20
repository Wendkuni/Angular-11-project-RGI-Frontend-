import { AuthAdminService } from './../../canActivator/authAdmin.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegionComponent } from './region.component';

const routes: Routes = [
  {
      path: '',
      canActivate: [AuthAdminService],
      component: RegionComponent
   },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionRoutingModule { }
