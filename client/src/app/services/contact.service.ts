import { Injectable } from '@angular/core';
import { Contact } from "../contact/contact";
import { ContactApiService } from "./contact-api.service";
import { ContactStorage } from "./contact-storage";
import { LocalStorageService } from "./localstorage.service";
import { environment } from "../../environments/environment";


@Injectable()
export class ContactService {

  private contactStorage: ContactStorage;

  constructor(private webApiStorage: ContactApiService, private localStorage: LocalStorageService) {
    this.contactStorage = environment.endpointUrl ? webApiStorage : localStorage;
  }

  newContact(contact: Contact){
    return this.contactStorage.saveContact(contact);
  }

  getAllContacts(){
    return this.contactStorage.findContacts();
  }

  removeContact(contact: Contact){
    return this.contactStorage.deleteContact(contact);
  }

  updateContact(contact: Contact){
    return this.contactStorage.editContact(contact);
  }
}
