import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDashboardComponent } from './create-dashboard/create-dashboard.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';

const routes: Routes = [
  {
    path:'dashboard/create',
    component: CreateDashboardComponent
  },
  {
    path:'dashboard/edit',
    component: EditDashboardComponent
  },
  {
    path:'dashboard',
    component: ViewDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
