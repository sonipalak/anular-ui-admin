import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteAppLayoutComponent } from './_core/components/site-app-layout/site-app-layout.component';
import { UserAppLayoutComponent } from './_core/components/user-app-layout/user-app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserAppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule)
      }
    ]
  },
  {
    path: '',
    component: SiteAppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
