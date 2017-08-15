import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorPage } from "../doctor/doctor";
import { DataPage } from "../data/data";

@IonicPage()
@Component({
  selector: 'page-medical',
  templateUrl: 'medical.html',
})
export class MedicalPage {
  name='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalPage');
    this.name=this.navParams.get('name');
  }
  Doctor(){
    this.navCtrl.push(DoctorPage,{name:this.name});
  };
  Medicine(){
    this.navCtrl.push(DataPage,{name:this.name,pageType:"medicine"});
  };
  Others(){
    this.navCtrl.push(DataPage,{name:this.name,pageType:"others"});
  };
  Wellness()
  {
    this.navCtrl.push(DataPage,{name:this.name,pageType:"wellness"});
  };
}
