import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Contact } from "../contact/contact";
import { environment } from "../../environments/environment";
import { ContactStorage } from "./contact-storage";

@Injectable()
export class ContactApiService implements ContactStorage {

  private url: string = environment.endpointUrl + '/contacts';

  constructor(private http: Http) {
  }

  findContacts() {
    return this.http
      .get(this.url)
      .map(response => response.json() as Contact[]);
  }

  saveContact(contact: Contact){
    return this.http
      .post(this.url, contact);
  }

  deleteContact(contact: Contact){
    return this.http
      .delete(this.url + '/' + contact.id);
  }

  editContact(contact: Contact){
   return this.http
     .put(this.url + '/' + contact.id, contact);
  }
}
