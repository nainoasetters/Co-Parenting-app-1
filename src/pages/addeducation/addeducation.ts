import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EducationPage } from '../education/education';

@IonicPage()
@Component({
  selector: 'page-addeducation',
  templateUrl: 'addeducation.html',
})
export class AddeducationPage {
  name: string = '';
  education = [];
  edu = {
    school:"",
    teacher:"",
    name:"",
    phone:"",
    email:""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get('name');
    // For checking Purpose
/*    this.edu.school = "comsats";
    this.edu.teacher = "Saqlain";
    this.edu.name = "Abbas";
    this.edu.phone = "0314";
    this.edu.email =  "def";
    this.education.push(this.edu);
    this.edu.school = "iiui";
    this.edu.teacher = "nadeem";
    this.edu.name = "Muhammad";
    this.edu.phone = "0300";
    this.edu.email =  "abc";
    this.education.push(this.edu);
*/  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeducationPage');
  }
  addEducation(){
  	this.navCtrl.push(EducationPage);
  }

}
