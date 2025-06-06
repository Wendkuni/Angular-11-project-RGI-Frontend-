import { adminLteConf } from './admin-lte.conf';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customLayout: boolean;
  title = 'Referentiel';
  constructor(
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.customLayout = value;
    });
  }
}
