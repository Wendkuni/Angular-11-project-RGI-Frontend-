import { LayoutModule } from './../../../library/angular-admin-lte/src/lib/layout/layout.module';
import { adminLteConf } from './../admin-lte.conf';
import { MenuRoutingModule } from './Menu.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuGestionComponent } from './MenuGestion.component';
import { CoreModule } from '../core/core.module';
import { MaterialBarModule, LoadingPageModule } from 'angular-loading-page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocaliteModule } from '../territoire/localite/localite/localite.module';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule, BrowserAnimationsModule, LocaliteModule
  ],
  declarations: [MenuGestionComponent]
})
export class MenuGestionModule { }
