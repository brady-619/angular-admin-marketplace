import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarEnviosPage } from './actualizar-envios.page';

describe('ActualizarEnviosPage', () => {
  let component: ActualizarEnviosPage;
  let fixture: ComponentFixture<ActualizarEnviosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizarEnviosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
