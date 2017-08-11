import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-bio',
  templateUrl: 'bio.html',
})
export class BioPage {
	bio = {
		name:"",
		dob:""
	};

  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder) 
  {
  	this.bio.name=this.navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BioPage');
  }
  backButton(){
  	this.navCtrl.pop();
  }
  saveBio(){
  	console.log('check:',this.bio);
  	this.http.post('/api/create/bio',this.bio)
  	.subscribe(data=>{
  		console.log("DATA:",data);
  	})
  }

}
