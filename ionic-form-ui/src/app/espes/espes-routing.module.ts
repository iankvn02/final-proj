import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspesPage } from './espes.page';

const routes: Routes = [
  {
    path: '',
    component: EspesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspesPageRoutingModule {}
