import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";
import { tokenNotExpired } from 'angular2-jwt';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthenticationService {

  private baseUrl: string;
  public jwtHelper: JwtHelper = new JwtHelper();
  public token: string;

  constructor(private http: Http) {
    this.baseUrl = environment.endpointUrl;
    this.token = localStorage.getItem('ca-token');
  }

  public login(username: string, password: string): Observable<boolean>{
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', username);
    urlSearchParams.append('password', password);
    let body = urlSearchParams.toString();

    return this.http.post(this.baseUrl + '/token', body, options)
      .map(response => {
        let token = response.json() && response.json().access_token;
        if(token){
          localStorage.setItem('ca-token', token);
          this.token = token;
          return true;
        }
        else{
          return false;
        }
      });
  }

  public loggedIn() {
    let token = this.token;
    console.log(
      this.jwtHelper.decodeToken(token),
      this.jwtHelper.getTokenExpirationDate(token),
      this.jwtHelper.isTokenExpired(token)
    );
    if(!this.token){
      return false;
    }
    return tokenNotExpired('ca-token');
  }

  public logout(): void {
    this.token = null;
    localStorage.removeItem('ca-token');
  }
}
