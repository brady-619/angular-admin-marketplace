import { TestBed } from '@angular/core/testing';

import { InsertCategoriaService } from './insert-categoria.service';

describe('InsertCategoriaService', () => {
  let service: InsertCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
