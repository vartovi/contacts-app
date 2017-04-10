import { Component, OnInit } from '@angular/core';
import { Contact } from "../contact-list/contact";
import { MdDialog } from "@angular/material";
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {
  contact: Contact;
  constructor(public contacts:ContactService, public dialog: MdDialog) { }

  addContact(firstName, lastName, phone, streetAddress, city){
    console.log("added");
    this.contact = new Contact(firstName, lastName, phone, streetAddress, city);
    console.log(this.contact);
    this.contacts.newContact(this.contact);
    this.dialog.closeAll();
  }

  ngOnInit() {
  }

}
