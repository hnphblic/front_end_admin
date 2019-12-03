import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})

/**
 * this method handle infomation is setup in system 
 */
export class SystemParamService {

  constructor(private httpClient: HttpClient) { }

  /**
   * get all infomation from system param
   */
  public getSystemParam() {
    return this.httpClient.get<any>(Constants.PATH_API_SYSTEM_PARAM).pipe(
      catchError(this.handleError<any>())
    );
  }

  /**
   * method update switchview
   * @param data 
   */
  public updateSwitchView(data) {
    return this.httpClient.post<any>(Constants.PATH_API_UPDATE_SWITCH_VIEW, {"value": data}).pipe(
      catchError(this.handleError<any>())
    );
  }

  /**
   * method get divsion
   */
  public getDivision() {
    return this.httpClient.get<any>(Constants.PATH_API_MASTER_DIVISION).pipe(
      catchError(this.handleError<any>())
    );
  }

  /**
   * handle Error
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

  /**
  * send mail to admin service
  */
  sendMailToService() {
    return this.httpClient.get<any>(Constants.PATH_API_SYSTEM_PARAM).pipe(
      catchError(this.handleError<any>())
    );
  }
}
