import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "./contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];
  @Output() editContact: EventEmitter<Contact>;
  @Output() removeContact: EventEmitter<Contact>;
  @Output() showContactsOnMap: EventEmitter<Contact>;

  constructor() {
    this.editContact = new EventEmitter();
    this.removeContact = new EventEmitter();
    this.showContactsOnMap = new EventEmitter();
  }

  deleteContact(contact: Contact){
    this.removeContact.emit(contact);
  }

  edit(contact: Contact){
    this.editContact.emit(contact);
    console.log("Edit", contact);
  }

  showOnMap(contact:Contact){
    this.showContactsOnMap.emit(contact);
    console.log("show map", contact.streetAddress + ', ' + contact.city);
  }
  ngOnInit() {
  }

}
