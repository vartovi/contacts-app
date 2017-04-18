import { Injectable } from '@angular/core';
import { Contact } from "../contact/contact";

@Injectable()
export class ContactService {

  private contacts: Contact[] = JSON.parse(localStorage.getItem('ngContacts'));
  constructor() {}

  newContact(contact: Contact){
    this.contacts.push(new Contact(contact.firstName, contact.lastName, contact.phone, contact.streetAddress, contact.city));
    localStorage.setItem('ngContacts', JSON.stringify(this.contacts));
  }

  getAllContacts(){
    return this.contacts;
  }

  removeContact(contact: Contact){
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
    localStorage.setItem('ngContacts', JSON.stringify(this.contacts));
  }

  updateContact(contact: Contact, oldContact: Contact){
    let index = this.contacts.indexOf(oldContact);
    this.contacts[index] = contact;
    localStorage.setItem('ngContacts', JSON.stringify(this.contacts));
  }
}
