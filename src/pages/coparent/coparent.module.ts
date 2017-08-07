import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoparentPage } from './coparent';

@NgModule({
  declarations: [
    CoparentPage,
  ],
  imports: [
    IonicPageModule.forChild(CoparentPage),
  ],
  exports: [
    CoparentPage
  ]
})
export class CoparentPageModule {}
