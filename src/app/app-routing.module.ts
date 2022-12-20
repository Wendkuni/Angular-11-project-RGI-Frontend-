import { CompteUserComponent } from './pages/CompteUser/CompteUser.component';
import { HomePageComponent } from './pages/HomePage/HomePage.component';
import { MenuGestionComponent } from './MenuGestion/MenuGestion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './canActivator/Auth.service';


const routes: Routes = [
  {
    path: 'Home',
    canActivate: [AuthService],
    component: MenuGestionComponent,
    
    children: [
      {
        path: 'Acceuil',
        component: HomePageComponent,
        data: {
          title: 'Acceuil',
        }
      },
      {
        path: 'CompteUtilisateur',
        component: CompteUserComponent,
        data: {
          title: 'Les compte de la Structure',
        }
      },
      {
        path: 'Region',
        loadChildren: () => import('./territoire/region/region.module').then(m => m.RegionModule),
        data: {
          title: 'Région',
        }
      },
        {
        path: 'Province',
        loadChildren: () => import('./territoire/province/province.module').then(m => m.ProvinceModule),
        data: {
          title: 'Province',
        }
      },
        {
        path: 'Arrondissement',
        loadChildren: () => import('./territoire/arrondissement/arrondissement.module').then(m => m.ArrondissementModule),
        data: {
          title: 'Arrondissement',
        }
      },
      {
        path: 'Commune',
        loadChildren: () => import('./territoire/commune/commune.module').then(m => m.CommuneModule),
        data: {
          title: 'Commune',
        }
      },
      {
        path: 'Localite',
        loadChildren: () => import('./territoire/localite/localite/localite.module').then( m => m.LocaliteModule),
        data: {
          title: 'Localite',
        }
      },
      {
        path: 'Profile',
        loadChildren: () => import('./gestionProfile/gestionProfile.module').then(m => m.GestionProfileModule),
        data: {
          title: 'Profile',
        }
      },
      {
        path: 'Compte',
        loadChildren: () => import('./GestionUtilisateur/GestionUtilisateur.module').then(m => m.GestionUtilisateurModule),
        data: {
          title: 'Gestion de Compte',
        }
      },
    ]
  },
  {
    path: 'Login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    data: {
      title: 'Login',
    }
  },
  {
    path: 'Error',
    loadChildren: () => import('./ErrorGestion/ErrorGestion.module').then(m => m.ErrorGestionModule),
    data: {
      title: 'Error',
    }
  },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: '**', redirectTo: 'Error/400', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
