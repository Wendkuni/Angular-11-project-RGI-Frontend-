import { Error400Component } from './Error400/Error400.component';
import { Routes, RouterModule } from '@angular/router';
import { Error500Component } from './Error500/Error500.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '400',
    component: Error400Component
   },
   {
    path: '500',
    component: Error500Component
   },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
