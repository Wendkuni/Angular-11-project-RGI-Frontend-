import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PROFILEService } from '../PROFILE.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/shared/services/TokenStorage.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ProfileUtilisateur',
  templateUrl: './ProfileUtilisateur.component.html',
  styleUrls: ['./ProfileUtilisateur.component.scss']
})
export class ProfileUtilisateurComponent implements OnInit {
  user;
  constructor(
                private token: TokenStorageService,
                private route: Router,
                private profile: PROFILEService) {
                  this.user = token.getUser();

                 }

  ngOnInit() {
    this.user = this.token.getUser();
  }

  register() {
    this.profile.saveType(1);
    this.route.navigate(['/Home/Profile/Update']);
  }

}
