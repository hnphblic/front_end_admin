import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Constants } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})

/**
 * provide the main screen service
 */
export class MainService {

  constructor(private httpClient: HttpClient) {
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
