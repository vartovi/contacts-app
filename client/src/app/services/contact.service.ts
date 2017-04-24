import { Injectable } from '@angular/core';
import { Contact } from "../contact/contact";
import { ContactApiService } from "./contact-api.service";
import { ContactStorage } from "./contact-storage";
import { LocalStorageService } from "./localstorage.service";
import { environment } from "../../environments/environment.local";


@Injectable()
export class ContactService {
  private contactStorage: ContactStorage;
  //private contacts: Contact[] = []; //= JSON.parse(localStorage.getItem('ngContacts'));

  constructor(private webApiStorage: ContactApiService, private localStorage: LocalStorageService) {
    this.contactStorage = environment.endpointUrl ? webApiStorage : localStorage;
  }

  newContact(contact: Contact){
    //this.contacts.push(new Contact(contact.firstName, contact.lastName, contact.phone, contact.streetAddress, contact.city));
    //localStorage.setItem('ngContacts', JSON.stringify(this.contacts));
    return this.contactStorage.saveContact(contact);
  }

  getAllContacts(){
    //return this.contacts;
    return this.contactStorage.findContacts();
  }

  removeContact(contact: Contact){
    //let index = this.contacts.indexOf(contact);
    //this.contacts.splice(index, 1);
    //localStorage.setItem('ngContacts', JSON.stringify(this.contacts));
    return this.contactStorage.deleteContact(contact);
  }

  updateContact(contact: Contact){
  return this.contactStorage.editContact(contact);
    //this.contacts[index] = contact;
    //localStorage.setItem('ngContacts', JSON.stringify(this.contacts));
  }
}
