import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../contact/contact';
/**
 * Generated class for the CoparentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-coparent',
  templateUrl: 'coparent.html',
})
export class CoparentPage {

  name:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoparentPage');
  }
  add()
  {
    console.log(this.name);
    this.navCtrl.setRoot(Contact);
  }


}
