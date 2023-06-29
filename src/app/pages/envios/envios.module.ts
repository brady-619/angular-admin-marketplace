import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviosPageRoutingModule } from './envios-routing.module';

import { EnviosPage } from './envios.page';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,MatTableModule,MatPaginatorModule,MatInputModule,MatSortModule,
    FormsModule,
    IonicModule,
    EnviosPageRoutingModule
  ],
  declarations: [EnviosPage]
})
export class EnviosPageModule {}
