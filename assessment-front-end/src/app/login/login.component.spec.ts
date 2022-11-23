import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../services/login.service';
import { SharedUiModule } from '../shared-ui/shared-ui.module';

import { LoginComponent } from './login.component';

@Component({
  selector: 'mat-icon',
  template: '<span></span>'
})
class MockMatIconComponent {
  @Input() svgIcon: any;
  @Input() fontSet: any;
  @Input() fontIcon: any;
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, ],
      imports: [MatCheckboxModule, MatIconModule,
        MatButtonModule,
        MatInputModule,
        HttpClientModule, ReactiveFormsModule, SharedUiModule],
      providers: [LoginService, FormBuilder]
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

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
