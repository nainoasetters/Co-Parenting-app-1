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
  email: string ="";
  password: string = "";
  uid:string = "";
  name: string = "";
  number: string = "";
  dob:string ="";
  user:any;
  constructor(private http: Http,private db:AngularFireDatabase, private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams, public tabsService: TabsService, public events: Events) {
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

  onSubmit(data){
    console.log('adasd');
  }
  // signup method
  signup(data) {
    //autnenticate user user the "Auth provider"
    this.auth.signup(this.email,this.password)
    .then(data => {
      this.user = {
        uid:data.uid,
        name: this.name,
        number:this.number,
        email:this.email,
        password:this.password,
        dob:this.dob
      }
      console.log(this.user);
      // sending user data to the server
      this.http.post("/api/users/create",this.user)
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
