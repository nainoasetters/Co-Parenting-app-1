import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WellnessPage } from './wellness';

@NgModule({
  declarations: [
    WellnessPage,
  ],
  imports: [
    IonicPageModule.forChild(WellnessPage),
  ],
  exports: [
    WellnessPage
  ]
})
export class WellnessPageModule {}
