import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Constants } from '../constants/constants';
@Injectable({
  providedIn: 'root'
})
/**
 * this service reciver and translation File, FileList
 */
export class ModemService {

  constructor(private httpClient: HttpClient) { }


 /**
   * 
   */
  public getModem() {
    return this.httpClient.get<any>(Constants.PATH_API_LOAD_MODEM).pipe(
      catchError(this.handleError<string>('post'))
    );
  }

  /**
   * 
   */
  loadModem(port: string) {
    return this.httpClient.post<any>(Constants.PATH_API_CONNECT_MODEM, {"portname": port}).pipe(
      catchError(this.handleError<string>('post'))
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

}
