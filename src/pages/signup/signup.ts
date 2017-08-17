import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { TabsService } from '../../providers/tabs.service';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  user = {
    email:"",
    password:"",
    uid:"",
    name:"",
    number:"",
    dob:""
  }
  u;
  constructor(private http: Http, private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams, public tabsService: TabsService, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  ionViewWillEnter(){
    this.tabsService.hide();
    this.events.publish('conversation:load');
  }

  ionViewWillLeave(){
    this.tabsService.show();
    this.events.publish('conversation:unload');
  }

  // signup method
  signup() {
    //autnenticate user user the "Auth provider"
    this.auth.signup(this.user.email,this.user.password)
    .then( data => {
      this.user.uid = data.uid;
      console.log(this.user);

      this.u={ uid:this.user.uid,
      name:this.user.name,
      email:this.user.email,
      password:this.user.password}

      // sending user data to the server
      this.http.post("http://localhost:3000/api/user/signup",this.u)
      .subscribe(data =>{
        this.navCtrl.setRoot('TabsPage');
        console.log("working");
      });
    })
    // if user authentication fails
    .catch(err=>{
      console.log("Error : ", err.message);
    });
  }

  signin() {
    this.navCtrl.setRoot('Welcome');
  }
}
