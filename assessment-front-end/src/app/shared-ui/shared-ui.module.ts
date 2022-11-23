import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { GaggleButtonComponent } from './gaggle-button/gaggle-button.component';
import { GaggleInputComponent } from './gaggle-input/gaggle-input.component';
import { GaggleLogoComponent } from './gaggle-logo/gaggle-logo.component';
import { ShowHideToggleButtonComponent } from './show-hide-toggle-button/show-hide-toggle-button.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormWrapperComponent,
    GaggleButtonComponent,
    GaggleInputComponent,
    GaggleLogoComponent,
    ShowHideToggleButtonComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormWrapperComponent,
    GaggleButtonComponent,
    GaggleInputComponent,
    GaggleLogoComponent,
    ShowHideToggleButtonComponent
  ]
})
export class SharedUiModule { }
