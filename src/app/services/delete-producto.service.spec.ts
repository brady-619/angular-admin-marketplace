import { TestBed } from '@angular/core/testing';

import { DeleteProductoService } from './delete-producto.service';

describe('DeleteProductoService', () => {
  let service: DeleteProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
