import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspesPageRoutingModule } from './espes-routing.module';

import { EspesPage } from './espes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspesPageRoutingModule
  ],
  declarations: [EspesPage]
})
export class EspesPageModule {}
