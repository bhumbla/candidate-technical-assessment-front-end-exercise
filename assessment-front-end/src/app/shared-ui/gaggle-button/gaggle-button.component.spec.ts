import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { GaggleButtonComponent } from './gaggle-button.component';


@Component({
  selector: 'mat-icon',
  template: '<span></span>'
})
class MockMatIconComponent {
  @Input() svgIcon: any;
  @Input() fontSet: any;
  @Input() fontIcon: any;
}


describe('GaggleButtonComponent', () => {
  let component: GaggleButtonComponent;
  let fixture: ComponentFixture<GaggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaggleButtonComponent ],
      imports: [MatIconModule, HttpClientTestingModule],
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

    fixture = TestBed.createComponent(GaggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
