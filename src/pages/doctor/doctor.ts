import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {
	doctor = {
	address:"",
	memo:"",
	name:"",
	phone:""
	};
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorPage');
  }
  addDoctor(){
  	console.log("addDoctor()",this.doctor);
  	this.http.post('/api/create/doctor',this.doctor)
  	.subscribe(data => {
  		console.log("DATA:",data);
  	})

  }
}
