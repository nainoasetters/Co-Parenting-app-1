import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddeducationPage } from './addeducation';

@NgModule({
  declarations: [
    AddeducationPage,
  ],
  imports: [
    IonicPageModule.forChild(AddeducationPage),
  ],
  exports: [
    AddeducationPage
  ]
})
export class AddeducationPageModule {}
