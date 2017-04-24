import { Contact } from "../contact/contact";
import { Observable } from "rxjs";

export interface ContactStorage {
  findContacts(): Observable<Contact[]>;
  saveContact(contact: Contact): Observable<any>;
  deleteContact(contact: Contact): Observable<any>;
  editContact(contact: Contact): Observable<any>;
}
