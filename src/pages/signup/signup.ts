import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { TabsService } from '../../providers/tabs.service';

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  constructor(public navCtrl: NavController, public navParams: NavParams, public tabsService: TabsService, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  ionViewWillEnter(){
    this.tabsService.hide();
    this.events.publish('conversation:load');
  }

  ionViewWillLeave(){
    this.tabsService.show();
    this.events.publish('conversation:unload');
  }

  signup() {
    this.navCtrl.setRoot('TabsPage');
  }

  signin() {
    this.navCtrl.setRoot('Welcome');
  }
}
