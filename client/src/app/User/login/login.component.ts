import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";

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

  constructor(private appRouter: Router, private authentication: AuthenticationService) {
    this.error = '';
  }

  ngOnInit() {
  }

  onLogin(username:string, password:string, newUser:boolean){

    this.error = '';
    if(!newUser){
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
