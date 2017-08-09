import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildDPage } from './child-d';

@NgModule({
  declarations: [
    ChildDPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildDPage),
  ],
  exports: [
    ChildDPage
  ]
})
export class ChildDPageModule {}
