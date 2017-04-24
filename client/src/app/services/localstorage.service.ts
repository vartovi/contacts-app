import { Injectable } from '@angular/core';
import { Contact } from "../contact/contact";
import * as _ from 'lodash';
import { Observable } from "rxjs/Observable";
import { ContactStorage } from "./contact-storage";

@Injectable()
export class LocalStorageService implements ContactStorage{

  private contacts: Contact[] = JSON.parse(localStorage.getItem('ngContacts'));

  constructor() { }

  saveContact(contact: Contact){
    let lastId = <Contact>_.maxBy(this.contacts, 'id');
    contact.id = lastId ? lastId.id + 1 : 1;
    this.contacts.push(contact);
    localStorage.setItem('ngContacts', JSON.stringify(this.contacts));
    return  Observable.of(this.contacts);
  }

  findContacts(){
    return Observable.of(this.contacts);
  }

  editContact(contact: Contact) {
    this.contacts = _.map(this.contacts, function (c: Contact) {
      return c.id == contact.id ? contact : c;
    });
    localStorage.setItem('ngContacts', JSON.stringify(this.contacts));
    return Observable.of(this.contacts);
  }

  deleteContact(contact: Contact){
    _.remove(this.contacts, function (c: Contact) {
      return _.isEqual(contact.id, c.id);
    });
    localStorage.setItem('ngContacts', JSON.stringify(this.contacts));
    return Observable.of(this.contacts);
  }
}
