
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaggleLogoComponent } from './gaggle-logo.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe.only('GaggleLogoComponent', () => {
  let component: GaggleLogoComponent;
  let fixture: ComponentFixture<GaggleLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaggleLogoComponent, ],
      imports: [MatIconModule, HttpClientTestingModule,],
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaggleLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
