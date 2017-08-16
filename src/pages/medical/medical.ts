import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AdddoctorPage } from "../adddoctor/adddoctor";
import { MedicinePage } from "../medicine/medicine";
import { OtherPage } from "../other/other";
import { WellnessPage } from "../wellness/wellness";

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
    this.navCtrl.push(AdddoctorPage,{name:this.name});
  };
  Medicine(){
    this.navCtrl.push(MedicinePage,{name:this.name,pageType:"medicine"});
  };
  Others(){
    this.navCtrl.push(OtherPage,{name:this.name,pageType:"others"});
  };
  Wellness()
  {
    this.navCtrl.push(WellnessPage,{name:this.name,pageType:"wellness"});
  };
}
