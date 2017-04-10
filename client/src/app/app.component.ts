import { Component } from '@angular/core';
import { ContactService } from './services/contact.service';
import { DialogService } from './services/dialog.service';
import { Contact } from "./contact-list/contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
    this.dialogService.contactDialog(contact);
  }
}
