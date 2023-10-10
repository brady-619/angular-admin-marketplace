import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarEnviosPage } from './actualizar-envios.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarEnviosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarEnviosPageRoutingModule {}
