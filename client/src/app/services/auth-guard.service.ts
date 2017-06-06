import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate() {
    if(this.auth.loggedIn() || !environment.endpointUrl) {
      return true;
    } else {
      this.router.navigate(['unauthorized']);
      return false;
    }
  }
}
