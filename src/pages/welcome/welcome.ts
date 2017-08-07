import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { TabsService } from '../../providers/tabs.service';
/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {

  constructor(public navCtrl: NavController, public navParams: NavParams, public tabsService: TabsService, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }

  ionViewWillEnter(){
    this.tabsService.hide();
    this.events.publish('conversation:load');
  }

  ionViewWillLeave(){
    this.tabsService.show();
    this.events.publish('conversation:unload');
  }

  signin() {
    console.log('signin');
    this.navCtrl.setRoot('TabsPage');
  }

  signup() {
    this.navCtrl.setRoot('Signup');
  }
}
