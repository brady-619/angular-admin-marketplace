import { TestBed } from '@angular/core/testing';

import { GetDetalleOrdenesService } from './get-detalle-ordenes.service';

describe('GetDetalleOrdenesService', () => {
  let service: GetDetalleOrdenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDetalleOrdenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
