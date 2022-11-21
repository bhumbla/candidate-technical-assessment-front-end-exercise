import { TestBed } from '@angular/core/testing';
import {MatIconRegistry} from '@angular/material/icon';

import { IconService } from './icon.service';

describe('IconService', () => {
  let service: IconService;

  const mockIconRegistry = {
    addSvgIcon: jest.fn()
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: MatIconRegistry, useValue: mockIconRegistry}
      ]
    });
    service = TestBed.inject(IconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register icons', () => {
    service.registerIcons();
    expect(service.iconRegistry.addSvgIcon).toHaveBeenCalled();
  })

});
