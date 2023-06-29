import { TestBed } from '@angular/core/testing';

import { GetEditUsuarioService } from './get-edit-usuario.service';

describe('GetEditUsuarioService', () => {
  let service: GetEditUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEditUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
