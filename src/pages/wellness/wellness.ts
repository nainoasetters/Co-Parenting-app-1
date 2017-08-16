import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataPage } from "../data/data";
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-wellness',
  templateUrl: 'wellness.html',
})
export class WellnessPage {
	name:string;
	pageType:string;
	wellness = [{title:"abc",memo:"def"},{title:"ghi",memo:"jhi"}];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
  	this.name=this.navParams.get('name');
    this.pageType=this.navParams.get('pageType');
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WellnessPage');
    this.http.get('/api/get/wellness')
    .subscribe(res =>{
      console.log(res);
    })
  }
  addWellness(){
  	this.navCtrl.push(DataPage,{name:this.name,pageType:"wellness"});
  	console.log(this.wellness);
  }

}
