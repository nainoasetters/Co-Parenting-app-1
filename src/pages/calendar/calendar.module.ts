import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Calendar } from './calendar';
import { IonTagsInputModule } from "ionic-tags-input";

@NgModule({
  declarations: [
    Calendar,
  ],
  imports: [
    IonTagsInputModule,
    IonicPageModule.forChild(Calendar),
  ],
  exports: [
    Calendar
  ]
})
export class StartchatModule {}
