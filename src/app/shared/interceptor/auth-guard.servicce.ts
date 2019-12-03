import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
/**
 * this class authentication user
 */
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.auth.logOut();
      return false;
    }
    return true;
  }
}