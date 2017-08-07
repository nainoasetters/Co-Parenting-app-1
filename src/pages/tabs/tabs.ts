import { Component } from '@angular/core';
import { IonicPage, ModalController, Events, NavController } from 'ionic-angular';

import { Database } from '../../providers/database';

@IonicPage()
@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  show: boolean = true;
  tab1Root: string = 'Home';
  tab2Root: string = 'Chat';
  tab3Root: string = 'Calendar';
  tab4Root: string = 'Requests';
  tab5Root: string = 'Contact';
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private events: Events, private db: Database) {
    this.initializeEventHandlers();
  }

  private initializeEventHandlers() {
    this.events.subscribe('conversation:load', () => {
      this.hideAdd();
    });
    this.events.subscribe('conversation:unload', () => {
      this.showAdd();
    });
  }

  startChat() {
    let modal = this.modalCtrl.create('Startchat');
    modal.present();
    modal.onDidDismiss(data => {
      if(data){
        setTimeout(() => {
          if(data.contacts.length > 1) {
            let group: any = new Object();
            let now = new Date();
            group.id = now.getTime().toString();
            group.name = 'New Group';
            group.contacts = data.contacts;

            this.db.addGroup(group);
            this.navCtrl.push('Conversation', {group: group});
          } else if(data.contacts.length === 1) {
            this.navCtrl.push('Conversation', {contact: data.contacts[0]});
          }
        }, 200);
      }
    });
  }

  showAdd() {
    this.show = true;
  }
  hideAdd() {
    this.show = false;
  }
}
