import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAppLayoutComponent } from './_core/components/user-app-layout/user-app-layout.component';
import { SiteAppLayoutComponent } from './_core/components/site-app-layout/site-app-layout.component';
import { FooterComponent } from './_core/components/footer/footer.component';
import { HeaderComponent } from './_core/components/header/header.component';
import { SidebarComponent } from './_core/components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_shared/modules/material/material.module';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    UserAppLayoutComponent,
    SiteAppLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgScrollbarModule
  ],
  exports:[
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
