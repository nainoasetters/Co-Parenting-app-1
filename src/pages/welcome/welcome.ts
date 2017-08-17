import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import  { AuthProvider } from '../../providers/auth/auth';
import { Database } from '../../providers/database';
import { TabsService } from '../../providers/tabs.service';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {
  user = {
  email:"",
  password:"",
  };
  constructor(private auth: AuthProvider, public navCtrl: NavController, private db: Database,public navParams: NavParams, public tabsService: TabsService, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }

  ionViewWillEnter(){
    this.tabsService.hide();
    this.events.publish('conversation:load');
  }

  ionViewWillLeave(){
    this.tabsService.show();
    this.events.publish('conversation:unload');
  }

  signin() {
    console.log('signin');
    //this.navCtrl.setRoot('TabsPage');
    this.auth.login(this.user.email,this.user.password)
    .then(data => {
      this.db.setUID(data.uid);
      this.navCtrl.setRoot('TabsPage');      
    })
    .catch(err=>{
      console.log("Error : ", err.message);
    })
  }

  signup() {
    this.navCtrl.setRoot('Signup');
  }
}
