import { TestBed } from '@angular/core/testing';

import { UpdateAdminUsuarioService } from './update-admin-usuario.service';

describe('UpdateAdminUsuarioService', () => {
  let service: UpdateAdminUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateAdminUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
