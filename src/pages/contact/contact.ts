import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

//pages
import  { CoparentPage } from '../coparent/coparent';
import  { ChildPage } from '../child/child';

//Providers
import  { Database } from '../../providers/database'

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class Contact {

  family:any;
  constructor(public navCtrl: NavController, private db:Database) {
    this.family = db.getData();
  }

  addRelation(relationType:string){
    if(relationType == 'coParent'){
      this.navCtrl.push(CoparentPage);
    }
    else if(relationType == 'child'){
      this.navCtrl.push(ChildPage);
    }
    else
      console.log('invalid Relation Type');
  }
  abc(a){
    console.log("name", a);
  }
}
