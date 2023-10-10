import { TestBed } from '@angular/core/testing';

import { UpdateEstatusOrdenService } from './update-estatus-orden.service';

describe('UpdateEstatusOrdenService', () => {
  let service: UpdateEstatusOrdenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateEstatusOrdenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
