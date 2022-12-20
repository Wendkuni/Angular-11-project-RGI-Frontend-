import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from './../shared/services/TokenStorage.service';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { adminLteConf } from '../admin-lte.conf';

@Component({
  selector: 'app-MenuGestion',
  templateUrl: './MenuGestion.component.html',
  styleUrls: ['./MenuGestion.component.css']
})
export class MenuGestionComponent implements OnInit {
  public customLayout: boolean;
  user;
  constructor(
    private layoutService: LayoutService,
    private token: TokenStorageService,
    private http: HttpClient
  ) {
    this.user = token.getUser();
  }

  ngOnInit() {
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.setMenu();
      this.customLayout = value;
    });
  }

  setMenu()
  {
      adminLteConf.sidebarLeftMenu = this.token.getMenu();
  }
}
