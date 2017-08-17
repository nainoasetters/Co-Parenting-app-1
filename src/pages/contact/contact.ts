import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

//pages
import { CoparentPage } from '../coparent/coparent';
import { ChildPage } from '../child/child';
import { ChildDPage } from '../child-d/child-d';

//Providers
import { Database } from "../../providers/database";

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
  child_detail(a : string)
  {
    this.navCtrl.push(ChildDPage, {name: a});
  }
  Twofunction()
  {
    if(this.family.coParent=="") 
    {
      this.navCtrl.push(CoparentPage);
    }
    else
    {
       this.navCtrl.push(ChildPage);   
    }
  }
}
