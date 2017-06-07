import {Component, Input} from '@angular/core';
import { AuthenticationService } from "./services/authentication.service";
import { LoginComponent } from "./User/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public auth: AuthenticationService){}

}
