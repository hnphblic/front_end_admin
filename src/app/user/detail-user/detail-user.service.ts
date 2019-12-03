import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Constants } from '../../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})

/**
 * provide the detail user service
 */
export class DetailUserService {

  /**
   * setup Dependency Injection
   * @param httpClient 
   */
  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * get detailed information of user
   */
  public getDetailUser() {
    return this.httpClient.get<any>(Constants.PATH_API_DETAIL_USER).pipe(
      catchError(this.handleError<string>())
    );
  }

  /**
   * update info user
   * @param data 
   */
  public updateUserInfo(name: string, email: string) {
    return this.httpClient.post<any>(Constants.PATH_UPDATE_USER_INFO, {"name": name, "email": email}).pipe(
      catchError(this.handleError<string>('post'))
    );
  }

  /**
   * handle error
   * @param operation 
   * @param result 
   */
  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error);
      // TODO: send the error to remote logging infrastructure
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
