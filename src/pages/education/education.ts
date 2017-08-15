import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {
	education = {
	school:"",
	teacher:"",
	name:"",
	phone:"",
	email:""
	};

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
  }
  addEducation(){
  	console.log("inside addEducation()",this.education);
  	this.http.post('/api/education/create',this.education)
  	.subscribe(data => {
  		console.log("DATA:",data);
  	})
  	
  }

}
