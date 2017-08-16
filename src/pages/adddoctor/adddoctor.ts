import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorPage } from "../doctor/doctor";
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-adddoctor',
  templateUrl: 'adddoctor.html',
})
export class AdddoctorPage {
	name:'';
  doctor = [{address:"abc",memo:"def",name:"ghi",phone:"jkl"},{address:"mno",memo:"pqr",name:"stu",phone:"vwx"}]
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdddoctorPage');
    this.http.get('/api/get/doctor')
    .subscribe(res =>{
      console.log(res);
    })
  }
  addDoctor(){
  	this.navCtrl.push(DoctorPage,{name:this.name});
  }

}
