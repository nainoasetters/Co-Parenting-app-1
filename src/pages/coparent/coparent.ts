import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../contact/contact';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-coparent',
  templateUrl: 'coparent.html',
})
export class CoparentPage {
  coParent= {
  name:'',
  };
  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoparentPage');
  }
  add()
  {
    console.log(this.coParent);
    this.http.post('/api/create/coParent',this.coParent)
    .subscribe(data => {
      console.log("Data:",data);
    })
  }


}
