import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Constants } from 'src/app/shared/constants/constants';

@Injectable({
  providedIn: 'root'
})

/**
 * provide the password service
 */
export class PasswordService {

  constructor(private httpClient: HttpClient) {
  }

  /**
   * call resetPassword method from back-end
   * @param user include userID and email to reset password
   * @return Observable<string> is a message
   */
  resetPassword(userId: string) {
    return this.httpClient.post<any>(Constants.PATH_API_RESET_PASSWORD, {"username": userId});
  }

  /**
   * method update password
   * @param password 
   * @param passwordConfirm 
   */
  updatePassword(oldPassword, newPassword: string, reTypePassword: string) {
        return this.httpClient.post<any>(Constants.PATH_API_UPDATE_PASSWORD, {"old_pass": oldPassword, "new_pass": newPassword, "retype_pass": reTypePassword }).pipe(
        catchError(this.handleError<any>('post'))
    );
  }

  /**
   * method validate password
   * @param password 
   * @param passwordConfirm 
   */
  public validatePassword(oldPassword, newPassword: string, reTypePassword: string) {
    return this.httpClient.post<any>(Constants.PATH_API_VALIDATE_PASSWORD, {"old_pass": oldPassword, "new_pass": newPassword, "retype_pass": reTypePassword }).pipe(
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error);
      // TODO: send the error to remote logging infrastructure
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
