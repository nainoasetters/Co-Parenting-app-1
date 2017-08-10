import { Injectable } from '@angular/core';

@Injectable()
export class Database {
  family;
  constructor() {
    console.log('Database Provider');
    this.family = [{
    name: "familyName",
    childrens: ["John", "Steve"],
    coParent: ' '
  }]
  }
  getData(){
    return this.family[0];
  }
  addContact(contact) {
    console.log('addContacts');
  }

  getMe() {
    console.log('getMe');
  }

  getGroups() {
    console.log('getGroups');
  }

  addGroup(group) {
    console.log('addGroup');
  }
}
