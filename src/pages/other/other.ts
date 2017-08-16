import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataPage } from "../data/data";
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {
	name:string;
	pageType:string;
	other = [{title:"abc",memo:"def"},{title:"ghi",memo:"jhi"}];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
  	this.name=this.navParams.get('name');
    this.pageType=this.navParams.get('pageType');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
    this.http.get('/api/get/other')
    .subscribe(res =>{
      console.log(res);
    })
  }

  addOther(){
  	this.navCtrl.push(DataPage,{name:this.name,pageType:"other"});
  	console.log(this.other);
  }

}
