import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreateDashboardComponent } from './create-dashboard/create-dashboard.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';
import { MaterialModule } from 'src/app/_shared/modules/material/material.module';


@NgModule({
  declarations: [
  
    CreateDashboardComponent,
       ViewDashboardComponent,
       EditDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
