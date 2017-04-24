import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(username:string, password:string){
    console.log(username + ' ' + password);
    this.router.navigate(['/contacts']);
  }
}
