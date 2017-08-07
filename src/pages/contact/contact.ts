import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

//pages
import  { CoparentPage } from '../coparent/coparent';
import  { OtherPage } from '../other/other';
import  { ChildPage } from '../child/child';

/**
 * Generated class for the Preferences page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class Contact {

  constructor(public navCtrl: NavController) {

  }
  addRelation(relationType:string){
    if(relationType == 'coParent')
      this.navCtrl.push(CoparentPage);
    else if(relationType == 'child')
      this.navCtrl.push(ChildPage);
    else if (relationType == 'other')
      this.navCtrl.push(OtherPage);
    else
      console.log('invalid Relation Type');
  }
}
