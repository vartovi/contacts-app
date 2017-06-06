import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes} from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ContactListItemComponent } from './contact/contact-list/contact-list-item/contact-list-item.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactDialogComponent } from './contact/contact-dialog/contact-dialog.component';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { DialogService } from "./services/dialog.service";
import { ContactService } from "./services/contact.service";
import { ContactAddressPipe } from './pipes/contact-address.pipe';
import { NgPipesModule } from 'ngx-pipes';
import { LoginComponent } from './User/login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ContactApiService } from './services/contact-api.service';
import { LocalStorageService } from './services/localstorage.service';
import { VibrationDirective } from './contact/vibration.directive';
import { OnEnterDirective } from './contact/on-enter.directive';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactComponent, canActivate: [AuthGuardService]},
  { path: 'unauthorized', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListItemComponent,
    ContactListComponent,
    ContactDialogComponent,
    MapDialogComponent,
    ContactAddressPipe,
    LoginComponent,
    ContactComponent,
    VibrationDirective,
    OnEnterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgPipesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DialogService, ContactService, ContactApiService, LocalStorageService, AuthenticationService, UserService, AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent, MapDialogComponent]
})
export class AppModule { }
