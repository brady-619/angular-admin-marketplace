import { TestBed } from '@angular/core/testing';

import { DeleteUsuarioService } from './delete-usuario.service';

describe('DeleteUsuarioService', () => {
  let service: DeleteUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
