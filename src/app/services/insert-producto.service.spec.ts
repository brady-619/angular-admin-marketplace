import { TestBed } from '@angular/core/testing';

import { InsertProductoService } from './insert-producto.service';

describe('InsertProductoService', () => {
  let service: InsertProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
