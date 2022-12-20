import { Structure } from './../../shared/models/Structure';
import { PROFILEService } from './../PROFILE.service';
import { Router } from '@angular/router';
import { LoginService } from './../../shared/services/login.service';
import { TokenStorageService } from './../../shared/services/TokenStorage.service';
import { UpdateProfileComponent } from './../UpdateProfile/UpdateProfile.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {
user;
  constructor(  private dialogMat: MatDialog,
                private token: TokenStorageService,
                private route: Router,
                private profile: PROFILEService) {
                  this.user = token.getUser().structure;

                 }

  ngOnInit() {
    this.user = this.token.getUser().structure;
  }

  register() {
    this.profile.saveType(2);
    this.route.navigate(['/Home/Profile/Update']);
  }

}
