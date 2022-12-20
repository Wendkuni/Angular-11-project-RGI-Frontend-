import { ProfileUtilisateurComponent } from './ProfileUtilisateur/ProfileUtilisateur.component';
import { UpdateProfileComponent } from './UpdateProfile/UpdateProfile.component';
import { AuthService } from './../canActivator/Auth.service';
import { ProfileComponent } from './Profile/Profile.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
      path: 'ProfileStructure',
      canActivate: [AuthService],
      component: ProfileComponent,
      data: {
        title: 'Structure Profile',
      }

   },
   {
    path: 'Update',
    canActivate: [AuthService],
    component: UpdateProfileComponent,
    data: {
      title: 'Update',
    }
 },
 {
  path: 'ProfileUtilisateur',
  canActivate: [AuthService],
  component: ProfileUtilisateurComponent,
  data: {
    title: 'Utilisateur profile',
  }
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionProfileRoutingModule { }
