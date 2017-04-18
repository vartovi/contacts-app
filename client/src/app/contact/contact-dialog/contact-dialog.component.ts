import { Component, OnInit } from '@angular/core';
import { Contact } from "../contact";
import { MdDialog } from "@angular/material";
import { ContactService } from "../../services/contact.service";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {
  contact: Contact;
  title: string;
  firstName: string;
  lastName: string;
  phone: string;
  streetAddress: string;
  city: string;
  update: boolean;

  constructor(public contacts:ContactService, public dialog: MdDialog) {}

  addContact(firstName, lastName, phone, streetAddress, city){
    this.contact = new Contact(firstName, lastName, phone, streetAddress, city);
    this.contacts.newContact(this.contact);
    this.dialog.closeAll();
  }

  updateContact(firstName, lastName, phone, streetAddress, city, oldContact) {
    this.contact = new Contact(firstName, lastName, phone, streetAddress, city);
    this.contacts.updateContact(this.contact, oldContact);
    this.dialog.closeAll();
  }

  ngOnInit() {
  }

}
