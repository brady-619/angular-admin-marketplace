import { TestBed } from '@angular/core/testing';

import { GetEditProductoService } from './get-edit-producto.service';

describe('GetEditProductoService', () => {
  let service: GetEditProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEditProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
