import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Constants } from '../constants/constants';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
/**
 * this class set header for all request
 */
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authen: AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if user loginned
    if (localStorage.getItem(Constants.NAME_TOKEN)) {
      // call next to set header
      return next.handle(this.modifyRequest(req)).pipe(
        // catch
        catchError(error => {
          // if user never login or user login in other place =>  logout
          if ([401, 403].indexOf(error.status) !== -1) {
            this.authen.logOut();
          } else {
            return throwError(error);
          }
        })
      )
    } else {
      return next.handle(req);
    }

  }

  /**
   * this method set header for all request
   * @param req 
   */
  private modifyRequest(req) {
    return req.clone({
      setHeaders:
      {
        'authorization': localStorage.getItem(Constants.NAME_TOKEN),
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  }
}
