import { TestBed } from '@angular/core/testing';

import { ServicioInfoService } from './servicio-info.service';

describe('ServicioInfoService', () => {
  let service: ServicioInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
