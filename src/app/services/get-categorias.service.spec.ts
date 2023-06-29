import { TestBed } from '@angular/core/testing';

import { GetCategoriasService } from './get-categorias.service';

describe('GetCategoriasService', () => {
  let service: GetCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
