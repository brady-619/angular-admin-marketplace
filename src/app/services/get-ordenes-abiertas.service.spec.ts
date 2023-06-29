import { TestBed } from '@angular/core/testing';

import { GetOrdenesAbiertasService } from './get-ordenes-abiertas.service';

describe('GetOrdenesAbiertasService', () => {
  let service: GetOrdenesAbiertasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOrdenesAbiertasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
