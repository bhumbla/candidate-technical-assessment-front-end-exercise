import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { ShowHideToggleButtonComponent } from './show-hide-toggle-button.component';

@Component({
  selector: 'mat-icon',
  template: '<span></span>'
})
class MockMatIconComponent {
  @Input() svgIcon: any;
  @Input() fontSet: any;
  @Input() fontIcon: any;
}

describe('ShowHideToggleButtonComponent', () => {
  let component: ShowHideToggleButtonComponent;
  let fixture: ComponentFixture<ShowHideToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHideToggleButtonComponent ],
      imports: [
        MatIconModule
      ]
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

    fixture = TestBed.createComponent(ShowHideToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
