import { Injectable } from '@angular/core';
import { Contact } from "../contact-list/contact";
import { MdDialog } from "@angular/material";
import { ContactDialogComponent } from "../contact-dialog/contact-dialog.component";
import { MapDialogComponent } from "../map-dialog/map-dialog.component";

@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) { }

  public contactDialog(contact?: Contact){
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contact = contact;
    dialogRef.componentInstance.title = "New Contact";
    return dialogRef.afterClosed();
  }

  public updateDialog(contact: Contact){
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contact = contact;
    dialogRef.componentInstance.title = "Edit Contact";
    dialogRef.componentInstance.firstName = contact.firstName;
    dialogRef.componentInstance.lastName = contact.lastName;
    dialogRef.componentInstance.phone = contact.phone;
    dialogRef.componentInstance.streetAddress = contact.streetAddress;
    dialogRef.componentInstance.city = contact.city;
    dialogRef.componentInstance.update = true;
    return dialogRef.afterClosed();
  }

  public mapDialog(address: string){
    let dialogRef = this.dialog.open(MapDialogComponent);
    dialogRef.componentInstance.address = address;
    return dialogRef.afterClosed();
  }
}
