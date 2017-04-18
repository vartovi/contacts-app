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

  constructor(public dialogService: DialogService, public contactService: ContactService) {
    this.contacts = contactService.getAllContacts();
  }

  openDialog(){
    this.dialogService.contactDialog();
  }

  deleteContact(contact: Contact){
    this.contactService.removeContact(contact);
  }

  editContact(contact: Contact){
    this.dialogService.updateDialog(contact);
  }

  showContactOnMap(contact: Contact){
    this.dialogService.mapDialog(contact.streetAddress + ', ' + contact.city);
  }
  ngOnInit() {
  }
}
