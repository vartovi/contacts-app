import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../../contact";

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() edit: EventEmitter<Contact>;
  @Output() remove: EventEmitter<Contact>;
  @Output()  showOnMap: EventEmitter<Contact>;

  constructor() {
    this.edit = new EventEmitter();
    this.remove = new EventEmitter();
    this.showOnMap = new EventEmitter();
  }

  deleteContact(contact: Contact){
    this.remove.emit(contact);
  }

  editContact(contact: Contact){
    this.edit.emit(contact);
  }

  showLocationOnMap(contact: Contact){
    this.showOnMap.emit(contact);
  }
  ngOnInit() {
  }

}
