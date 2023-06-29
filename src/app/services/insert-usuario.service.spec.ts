import { TestBed } from '@angular/core/testing';

import { InsertUsuarioService } from './insert-usuario.service';

describe('InsertUsuarioService', () => {
  let service: InsertUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
