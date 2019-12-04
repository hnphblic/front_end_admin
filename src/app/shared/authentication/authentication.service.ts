import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})

/**
 * this class handle login, logout
 */
export class AuthenticationService {
  constructor(private httpClient: HttpClient, public jwthelper: JwtHelperService, private router: Router) {
  }

  /**
   * this is method login, this run when user click login in view
   */
  public login(data: any) {
    return this.httpClient.post<any>(Constants.PATH_API_LOGIN, data).pipe(
      catchError(this.handleError<string>('post'))
    );
  }

  /**
   * this method check token Expired or not
   */
  public isAuthenticated(): boolean {
    const token = localStorage.getItem(Constants.NAME_TOKEN);
    return !this.jwthelper.isTokenExpired(token);
  }

  /**
   * this is method log out
   */
  public logOut(): void {
    localStorage.clear();
    this.router.navigate([Constants.LINK_LOGIN]);
  }

  /**
   * handle Error
   * @param operation 
   * @param result 
   */
  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
