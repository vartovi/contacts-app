import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Contact } from "../contact/contact";
import { environment } from "../../environments/environment";
import { ContactStorage } from "./contact-storage";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ContactApiService implements ContactStorage {

  private url: string = environment.endpointUrl + '/contacts';

  constructor(private http: Http) {
  }

  findContacts() {
    let token = localStorage.getItem('ca-token');
    let headers: Headers = new Headers();
    headers.append('Authorization','Bearer ' + token);
    let options = new RequestOptions(({ headers: headers }));
    return this.http
      .get(this.url, options)
      .map(response => response.json() as Contact[]);
  }

  saveContact(contact: Contact){
    let token = localStorage.getItem('ca-token');
    let headers: Headers = new Headers();
    headers.append('Authorization','Bearer ' + token);
    let options = new RequestOptions(({ headers: headers }));
    return this.http
      .post(this.url, contact, options);
  }

  deleteContact(contact: Contact){
    let token = localStorage.getItem('ca-token');
    let headers: Headers = new Headers();
    headers.append('Authorization','Bearer ' + token);
    let options = new RequestOptions(({ headers: headers }));
    return this.http
      .delete(this.url + '/' + contact.id, options);
  }

  editContact(contact: Contact){
    let token = localStorage.getItem('ca-token');
    let headers: Headers = new Headers();
    headers.append('Authorization','Bearer ' + token);
    let options = new RequestOptions(({ headers: headers }));
   return this.http
     .put(this.url + '/' + contact.id, contact, options);
  }
}
