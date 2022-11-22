import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { GaggleLogoComponent } from './shared-ui/gaggle-logo/gaggle-logo.component';
import { HttpClientModule } from '@angular/common/http';
import { GaggleButtonComponent } from './shared-ui/gaggle-button/gaggle-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GaggleInputComponent } from './shared-ui/gaggle-input/gaggle-input.component';
import { LoginComponent } from './login/login.component';
import { ShowHideToggleButtonComponent } from './shared-ui/show-hide-toggle-button/show-hide-toggle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GaggleLogoComponent,
    GaggleButtonComponent,
    GaggleInputComponent,
    LoginComponent,
    ShowHideToggleButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
