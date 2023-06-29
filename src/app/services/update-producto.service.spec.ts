import { TestBed } from '@angular/core/testing';

import { UpdateProductoService } from './update-producto.service';

describe('UpdateProductoService', () => {
  let service: UpdateProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
