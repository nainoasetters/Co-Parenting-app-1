import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EducationPage } from '../education/education';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-addeducation',
  templateUrl: 'addeducation.html',
})
export class AddeducationPage {
  name: string = '';
  education = [{school:"iiui",teacher:"nadeem",name:"sir",phone:"0300",email:"nadeem@gmail.com"}];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
    this.name = this.navParams.get('name');  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeducationPage');
    this.http.get('/api/get/education')
    .subscribe(res =>{
      console.log(res);
    })
  }
  addEducation(){
  	this.navCtrl.push(EducationPage);
  }

}
