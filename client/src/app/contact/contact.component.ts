import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { DialogService } from '../services/dialog.service';
import { Contact } from "./contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[];

  constructor(public dialogService: DialogService, public contactService: ContactService) {}

  openDialog(){
    this.dialogService.contactDialog().subscribe(response => this.loadContacts());
  }

  deleteContact(contact: Contact){
    this.contactService.removeContact(contact).subscribe(response => this.loadContacts());
  }

  editContact(contact: Contact){
    this.dialogService.updateDialog(contact).subscribe(response => this.loadContacts());
  }

  showContactOnMap(contact: Contact){
    this.dialogService.mapDialog(contact.streetAddress + ', ' + contact.city);
  }

  loadContacts(){
    this.contactService.getAllContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }
  ngOnInit() {
    this.loadContacts();
  }
}
