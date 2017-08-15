import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {
	name:string;
	pageType:string;
	data = {
		title:'',
		memo:'',
	}
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
    this.name=this.navParams.get('name');
    this.pageType=this.navParams.get('pageType');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataPage');
  }
  add(){
  		console.log(this.data);
  	if(this.pageType == 'medicine')
  	{
  		this.http.post('/api/create/medicine',this.data)
  		.subscribe(data => {
  			console.log("DATA: ", data);
  		})
  	}
  	else if(this.pageType == 'others')
  	{
  		this.http.post('/api/create/other',this.data)
  		.subscribe(data => {
  			console.log("DATA: ", data);
  		})
  	}
  	else if(this.pageType == 'wellness')
  	{
  		this.http.post('/api/create/wellness',this.data)
  		.subscribe(data => {
  			console.log("DATA: ", data);
  		})
  	}
  	else
  		console.log("invalid Page Type");
  }

}
