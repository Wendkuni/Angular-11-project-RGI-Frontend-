import { Router } from '@angular/router';
import { PROFILEService } from './../../gestionProfile/PROFILE.service';
import { TokenStorageService } from 'src/app/shared/services/TokenStorage.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})

export class HeaderInnerComponent implements OnInit{
  user;
  constructor(private token: TokenStorageService,
              private profile: PROFILEService,
              private route: Router) { this.user = token.getUser();}
  ngOnInit()
  {

  }
  deconnection()
  {
    this.token.signOut();
    window.location.reload();
  }

  profileA()
  {
    this.profile.saveType(2);
    this.route.navigate(['/Home/Profile/ProfileUtilisateur']);
  }
}
