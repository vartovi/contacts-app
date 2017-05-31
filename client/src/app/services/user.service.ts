import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class UserService {

  private url: string = environment.endpointUrl + '/user';

  constructor(private http: Http) { }

  newUser(username:string, password:string){
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', username);
    urlSearchParams.append('password', password);
    let body = urlSearchParams.toString();
    return this.http
      .post(this.url, body, options);
  }

}
