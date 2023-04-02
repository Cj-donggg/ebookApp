import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocaddPage } from './docadd.page';

const routes: Routes = [
  {
    path: '',
    component: DocaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocaddPageRoutingModule {}
