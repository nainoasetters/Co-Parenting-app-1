import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

//pages
import { CoparentPage } from '../coparent/coparent';
import { ChildPage } from '../child/child';
import { ChildDPage } from '../child-d/child-d';
import { Database } from "../../providers/database";

//Providers

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
      this.family.coParent = 'abc';
    }
    else if(relationType == 'child'){
      this.navCtrl.push(ChildPage);
    }
    else
      console.log('invalid Relation Type');
  }
  child_detail(a : string)
  {
    this.navCtrl.push(ChildDPage, {name: a});
  }
}
