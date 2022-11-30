import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerapiaPage } from './terapia.page';

const routes: Routes = [
  {
    path: '',
    component: TerapiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerapiaPageRoutingModule {}
