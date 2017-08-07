import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';

import { Database } from '../../providers/database';
/**
 * Generated class for the Messages page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
