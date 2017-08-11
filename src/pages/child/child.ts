import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../contact/contact';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-child',
  templateUrl: 'child.html',
})
export class ChildPage {
  child = {
  name: "",
  dob : "",
  }
  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildPage');
  }
  add()
  {
    console.log(this.child.name, ' : ',this.child.dob);
    this.http.post('/api/create/child',this.child)
    .subscribe(data => {
      console.log("DATA:",data);
    })
    this.navCtrl.setRoot(Contact);
  }

}
