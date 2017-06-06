import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";
import { UserService } from "../../services/user.service"
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  newUser: boolean;
  error: string;

  constructor(private appRouter: Router, private authentication: AuthenticationService, private userservice: UserService, private auth: AuthenticationService) {
    this.error = '';
  }

  ngOnInit() {
    if(!environment.endpointUrl){
      //Local environment
      //Authentication is not supported
      this.appRouter.navigate(['/contacts']);
    }
  }

  onLogin(username:string, password:string, newUser:boolean){

    this.error = '';

    if(newUser) {
      console.log("Add user: " + username + ' ' + password);
      this.userservice.newUser(username, password).subscribe(response => {
        this.authentication.login(username, password)
          .subscribe(result => {
            if(result === true){
              this.appRouter.navigate(['/contacts']);
            }
            else{
              console.log('LoginComponent: onLogin: error');
              this.error = 'Invalid username or password!';
            }
          }, error => {
            console.log('LoginComponent: onLogin: error');
            this.error = 'Invalid username or password!';
          });
      });
    }
    else{
      this.authentication.login(username, password)
        .subscribe(result => {
          if(result === true){
            this.appRouter.navigate(['/contacts']);
          }
          else{
            console.log('LoginComponent: onLogin: error');
            this.error = 'Invalid username or password!';
          }
        }, error => {
          console.log('LoginComponent: onLogin: error');
          this.error = 'Invalid username or password!';
        });
    }
  }
}
