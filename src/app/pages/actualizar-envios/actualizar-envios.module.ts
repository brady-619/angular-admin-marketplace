import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarEnviosPageRoutingModule } from './actualizar-envios-routing.module';

import { ActualizarEnviosPage } from './actualizar-envios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarEnviosPageRoutingModule
  ],
  declarations: [ActualizarEnviosPage]
})
export class ActualizarEnviosPageModule {}
