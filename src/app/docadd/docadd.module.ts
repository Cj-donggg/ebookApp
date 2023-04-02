import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocaddPageRoutingModule } from './docadd-routing.module';

import { DocaddPage } from './docadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocaddPageRoutingModule
  ],
  declarations: [DocaddPage]
})
export class DocaddPageModule {}
