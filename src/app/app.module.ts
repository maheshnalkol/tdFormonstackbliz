import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainDashboardComponent } from './shared/component/main-dashboard/main-dashboard.component';
import { Comp1Component } from './shared/component/comp1/comp1.component';
import { Comp2Component } from './shared/component/comp2/comp2.component';
import { Comp3Component } from './shared/component/comp3/comp3.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
