import { Injectable } from '@angular/core';

/*
  Generated class for the Database provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Database {
  contacts = [
    {
      id: 'U000001',
      first_name: 'Oswald',
      last_name: 'Cobb',
      email: 'oswald@gmail.com',
      phone: '+1234567890',
      avatar: 'assets/img/oswald.png',
      status: `I'm the King of Gotham!`
    },
    {
      id: 'U000002',
      first_name: 'Fish',
      last_name: 'Mooney',
      email: 'mooney@gmail.com',
      phone: '+1234567891',
      avatar: 'assets/img/fish.png',
      status: `Please don't call me babes`
    },
    {
      id: 'U000003',
      first_name: 'Quang Anh',
      last_name: 'Le',
      email: 'quanganh@aiti.com.vn',
      phone: '+1234567892',
      avatar: 'assets/img/profile-anhlq.png',
      status: `I'm a Bitch CEO!`
    },
    {
      id: 'U000004',
      first_name: 'Barbara',
      last_name: 'Kean',
      email: 'barbara@gmail.com',
      phone: '+1234567893',
      avatar: 'assets/img/barbara.png',
      status: `It's Gotham, baby, we've got all flair`
    },
    {
      id: 'U000005',
      first_name: 'Edward',
      last_name: 'Nygma',
      email: 'edward@gmail.com',
      phone: '+1234567894',
      avatar: 'assets/img/edward.png',
      status: `No body, no crime`
    },
    {
      id: 'U000006',
      first_name: 'Selina',
      last_name: 'Kyle',
      email: 'selina@gmail.com',
      phone: '+1234567894',
      avatar: 'assets/img/selina.png',
      status: `Can got your tongue?`
    },
    {
      id: 'U000007',
      first_name: 'Harvey',
      last_name: 'Bullock',
      email: 'harvey@gmail.com',
      phone: '+1234567896',
      avatar: 'assets/img/harvey.png',
      status: `I thought I was supposed to be the bad guy here?`
    },
    {
      id: 'U000008',
      first_name: 'Jim',
      last_name: 'Gordon',
      email: 'gordon@gmail.com',
      phone: '+1234567897',
      avatar: 'assets/img/jim.png',
      status: `I'm the King of Gotham!`
    },
    {
      id: 'U000009',
      first_name: 'Le Minh',
      last_name: 'Ha',
      email: 'haleminh27@gmail.com',
      phone: '+1234567898',
      avatar: 'assets/img/utre.png',
      status: `I'm the Queen of Gotham!`
    },
    {
      id: 'U000010',
      first_name: 'Ba Hoang',
      last_name: 'Le',
      email: 'lebahoang@gmail.com',
      phone: '+1234567899',
      avatar: 'assets/img/anhlq.png',
      status: `I'm the King Nothing!`
    },
  ];
  groups: any;
  constructor() {
    console.log('Hello Database Provider');
    this.groups = [
      {
        id: 'G000001',
        name: 'Gotham City Police Department',
        owner: this.contacts[0],
        contacts: [this.contacts[2], this.contacts[4]]
      },
      {
        id: 'G000002',
        name: 'Wayne Enterprises',
        owner: this.contacts[1],
        contacts: [this.contacts[3], this.contacts[5], this.contacts[6], this.contacts[7]]
      },
      {
        id: 'G000003',
        name: 'Falcone Crime Family',
        owner: this.contacts[6],
        contacts: [this.contacts[2], this.contacts[8], this.contacts[4], this.contacts[0], this.contacts[1], this.contacts[3]]
      },
      {
        id: 'G000004',
        name: 'Arkham Asylum',
        owner: this.contacts[3],
        contacts: [this.contacts[0], this.contacts[1], this.contacts[2], this.contacts[4], this.contacts[5]]
      },
    ]
  }

  getContacts() {
    let contacts = this.contacts.filter(contact => {
      return contact.id !== 'U000007';
    });
    return contacts;
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  getMe() {
    return this.contacts[6];
  }

  getGroups() {
    return this.groups;
  }

  addGroup(group) {
    this.groups.push(group);
  }
}
