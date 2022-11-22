
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';

import { GaggleLogoComponent } from '../shared-ui/gaggle-logo/gaggle-logo.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DashboardComponent } from './dashboard.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GaggleButtonComponent } from '../shared-ui/gaggle-button/gaggle-button.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';


import { Component, Input } from '@angular/core';

@Component({
  selector: 'mat-icon',
  template: '<span></span>'
})
class MockMatIconComponent {
  @Input() svgIcon: any;
  @Input() fontSet: any;
  @Input() fontIcon: any;
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent, GaggleLogoComponent, GaggleButtonComponent ],
      imports: [MatIconModule, MatMenuModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        MatDividerModule, HttpClientTestingModule, ReactiveFormsModule],
      providers: [FormBuilder]
    }).overrideModule(MatIconModule, {
      remove: {
         declarations: [MatIcon],
         exports: [MatIcon]
      },
      add: {
          declarations: [MockMatIconComponent],
          exports: [MockMatIconComponent]
     }
     })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    // loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
