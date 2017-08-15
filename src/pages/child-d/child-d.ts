import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BioPage } from '../bio/bio';
import { AddeducationPage } from '../addeducation/addeducation';
import {MedicalPage} from "../medical/medical";

@IonicPage()
@Component({
  selector: 'page-child-d',
  templateUrl: 'child-d.html',
})
export class ChildDPage
{
  name="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildDPage');
    this.name=this.navParams.get('name');
  }
  bio(){
  	this.navCtrl.push(BioPage,{name:this.name});
  }
  education(){
    this.navCtrl.push(AddeducationPage,{name:this.name});
  }
  Medical()
  {
    this.navCtrl.push(MedicalPage,{name:this.name});
  }

}
