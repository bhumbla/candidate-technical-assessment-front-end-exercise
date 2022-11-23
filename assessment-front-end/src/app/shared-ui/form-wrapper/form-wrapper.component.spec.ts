import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GaggleInputComponent } from '../gaggle-input/gaggle-input.component';
import { ShowHideToggleButtonComponent } from '../show-hide-toggle-button/show-hide-toggle-button.component';

import { FormWrapperComponent } from './form-wrapper.component';

describe('FormWrapperComponent', () => {
  let component: FormWrapperComponent;
  let fixture: ComponentFixture<FormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWrapperComponent, GaggleInputComponent, ShowHideToggleButtonComponent ],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWrapperComponent);
    component = fixture.componentInstance;
    component.formTemplate = {
      showSubmitBtn: false,
      fields: []
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
