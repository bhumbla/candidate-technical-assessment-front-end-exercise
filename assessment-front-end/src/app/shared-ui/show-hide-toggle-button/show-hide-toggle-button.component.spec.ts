import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHideToggleButtonComponent } from './show-hide-toggle-button.component';

describe('ShowHideToggleButtonComponent', () => {
  let component: ShowHideToggleButtonComponent;
  let fixture: ComponentFixture<ShowHideToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHideToggleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHideToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
