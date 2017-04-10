import { Injectable } from '@angular/core';
import { Contact } from "../contact-list/contact";

@Injectable()
export class ContactService {

  private contacts: Contact[] = JSON.parse(localStorage.getItem('ngContacts'));
  constructor() { }

  newContact(contact: Contact){
    this.contacts.push(new Contact(contact.firstName, contact.lastName, contact.phone, contact.streetAddress, contact.city));
    localStorage.setItem('ngContacts', JSON.stringify(this.contacts));
    console.log(this.contacts);
  }

  getAllContacts(){
    return this.contacts;
  }
}
