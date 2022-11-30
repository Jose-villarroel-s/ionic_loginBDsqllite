import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerapiaPageRoutingModule } from './terapia-routing.module';

import { TerapiaPage } from './terapia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerapiaPageRoutingModule
  ],
  declarations: [TerapiaPage]
})
export class TerapiaPageModule {}
