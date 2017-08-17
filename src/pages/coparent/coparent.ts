import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../contact/contact';
import { Http, RequestOptions, Response,Headers } from '@angular/http';
import { Database } from '../../providers/database';
import 'rxjs/add/operator/map'
@IonicPage()
@Component({
  selector: 'page-coparent',
  templateUrl: 'coparent.html',
})
export class CoparentPage {
  d;
  coParent= {
  Relation_Name:'',
  coparent_UID:'',

  };
  constructor(private db:Database,private http:Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoparentPage');
  }
  add()
  {
      this.d=
      {
       uid:this.db.getUID(),
       relation_name:this.coParent.Relation_Name,
       coparent_id:this.coParent.coparent_UID,
       childs:[],

       }
   let myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json')
   myHeaders.append('Access-Control-Allow-Origin','http://localhost:8100');
   let options = new RequestOptions({headers:myHeaders});
    this.http.post('http://localhost:3000/api/test',this.d,options)
    .map(res=>{
      let body = res.json();
      return body;
    })
    .subscribe(data => {
      console.log("Data:",data);
      console.log(data.message);
    })
  }


}
