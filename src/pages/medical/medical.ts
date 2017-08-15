import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DoctorPage} from "../doctor/doctor";
import {MedicinePage} from "../medicine/medicine";
import {OtherPage} from "../other/other";
import {WellnessPage} from "../wellness/wellness";

/**
 * Generated class for the MedicalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
    this.navCtrl.push(MedicinePage,{name:this.name});
  };
  Others(){
    this.navCtrl.push(OtherPage,{name:this.name});
  };
  Wellness()
  {
    this.navCtrl.push(WellnessPage,{name:this.name});

  };


}
