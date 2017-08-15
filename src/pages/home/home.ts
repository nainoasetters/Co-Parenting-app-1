import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';

import { Database } from '../../providers/database';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  abc = ["a","b","c"];
  constructor(public navCtrl: NavController)
  {

  }
}
