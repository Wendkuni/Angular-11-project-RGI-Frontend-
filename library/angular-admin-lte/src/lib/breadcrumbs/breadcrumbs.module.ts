import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatCardModule],
  exports: [BreadcrumbsComponent],
  declarations: [BreadcrumbsComponent]
})
export class BreadcrumbsModule {}
