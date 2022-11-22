import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaggleInputComponent } from './gaggle-input.component';

describe('GaggleInputComponent', () => {
  let component: GaggleInputComponent;
  let fixture: ComponentFixture<GaggleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaggleInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaggleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
