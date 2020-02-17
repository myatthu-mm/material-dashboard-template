import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { LayoutsModule } from './modules/layouts.module';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './views/admin-layout/admin-layout.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, LoginComponent],
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    LayoutsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
