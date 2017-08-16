import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdddoctorPage } from './adddoctor';

@NgModule({
  declarations: [
    AdddoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(AdddoctorPage),
  ],
  exports: [
    AdddoctorPage
  ]
})
export class AdddoctorPageModule {}
