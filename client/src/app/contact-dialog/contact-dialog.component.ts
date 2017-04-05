import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact-list/contact";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {
  contact;
  constructor() { }

  ngOnInit() {
  }

}
