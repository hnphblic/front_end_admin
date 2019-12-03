import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constants } from '../shared/constants/constants';
import { TranslateCustomService } from '../shared/translate/translate-custom.service';

@Injectable({
  providedIn: 'root'
})

/**
 * this is service  HistoryManipulationService, this handle Manipulation
 */
export class HistoryOperatorService {

  constructor(private http: HttpClient,
    private translate: TranslateCustomService) { }

  /**
   * get getHistoryData
   */
  getHistoryData(value?: string): Observable<any> {
    var url = Constants.PATH_API_HISTORY + `?time_zone=${new Date().toString().split("GMT")[1].split(" (")[0].trim()}&locale=${this.translate.getLanguage()}`;
    url = value ? url + `&key_word=${value}` : url;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<History[]>('getHistoryData', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
