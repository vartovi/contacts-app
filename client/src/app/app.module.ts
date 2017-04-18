import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ContactListItemComponent } from './contact-list/contact-list-item/contact-list-item.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { DialogService } from "./services/dialog.service";
import { ContactService } from "./services/contact.service";
import { ContactAddressPipe } from './pipes/contact-address.pipe';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    ContactListItemComponent,
    ContactListComponent,
    ContactDialogComponent,
    MapDialogComponent,
    ContactAddressPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgPipesModule
  ],
  providers: [DialogService, ContactService],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent, MapDialogComponent]
})
export class AppModule { }
