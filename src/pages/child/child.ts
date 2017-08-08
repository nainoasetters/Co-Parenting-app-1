import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../contact/contact';
/**
 * Generated class for the ChildPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-child',
  templateUrl: 'child.html',
})
export class ChildPage {
  name: string;
  dob : Date;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildPage');
  }
  add()
  {
    console.log(this.name, ' : ',this.dob);
    this.navCtrl.setRoot(Contact);
  }

}
