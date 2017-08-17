import { Injectable } from '@angular/core';

@Injectable()
export class Database {
  family;
  uid='';
  constructor() {
    console.log('Database Provider');
    this.family = [{
    name: "familyName",
    childrens: ["John", "Steve"],
    coParent: ""
  }]
  }
  setUID(a)
  {
      this.uid=a;
  }
  getUID()
  {
      return this.uid;
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
