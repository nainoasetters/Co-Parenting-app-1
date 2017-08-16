import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataPage } from "../data/data";
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-medicine',
  templateUrl: 'medicine.html',
})
export class MedicinePage {
	name:string;
	pageType:string;
	medicine = [{title:"abc",memo:"def"},{title:"ghi",memo:"jhi"}];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
  	this.name=this.navParams.get('name');
    this.pageType=this.navParams.get('pageType');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicinePage');
    this.http.get('/api/get/medicine')
    .subscribe(res =>{
      console.log(res);
    })
  }

  addMedicine(){
  	this.navCtrl.push(DataPage,{name:this.name,pageType:"medicine"});
  	console.log(this.medicine);
  }
}
