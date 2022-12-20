import { TokenStorageService } from './../../shared/services/TokenStorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css']
})
export class HomePageComponent implements OnInit {
  panelOpenState = false;
  yourToken;
  user;
  isAct = false;
  constructor(private token: TokenStorageService) {
    this.user = token.getUser();
    if (token.getUser().roles[0].name === 'ROLE_APPLICATIF')
    {
      this.isAct = true;
    }
   }

  ngOnInit() {
    this.yourToken = this.token.getToken();
  }


}
