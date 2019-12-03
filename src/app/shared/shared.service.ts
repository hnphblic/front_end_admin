import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication/authentication.service';
import { Constants } from './constants/constants';

@Injectable({
  providedIn: 'root'
})

/**
 * provide shared services
 */
export class SharedService {
  constructor(private httpClient: HttpClient,private router: Router, private auth: AuthenticationService) { }

  /**
   * check netword
   */
  checkNetwork() {
    return this.httpClient.get<any>(Constants.PATH_API_CHECK_NETWORK).pipe(
      catchError(this.handleError<any>('get error'))
    );
  }

  handlerNetwork() {
    var promise = new Promise(resolve => {
      if(localStorage.getItem(Constants.NAME_TOKEN)) {
        var decode = new JwtHelperService().decodeToken(localStorage.getItem(Constants.NAME_TOKEN));
        this.checkNetwork().subscribe(data => {
          if(decode.is_inside != data.extra.is_inside) {
            this.auth.logOut();
          } else {
            resolve();
          }
        }, () =>  this.router.navigate([Constants.LINK_SYSTEM_ERROR]))
      }
    })
    return promise;
  }

  /**
   * get switch view
   */
   getSessionInfo() {
    return this.httpClient.get<any>(Constants.PATH_API_SESSION_INFO).pipe(
      catchError(this.handleError<any>('get error'))
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
   * method delay ms : milisecond
   * @param ms 
   */
  public delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
    * this function search history manipulation
    * @param value 
    * @param listSearch 
    */
  searchList<T>(value: string, listSearch: T[]) {
    value = value.trim();
    // if don't have value sort => return listSearch
    if (value == '') {
      return listSearch;
      //else 
    } else {
      // create listresult to return
      var listResult: T[] = [];
      var listKey = [];
      // list key search
      listKey = Object.keys(listSearch[1]).filter(value => {
        return value != "image" && value != "isSelected" && value!= "file";
    });
      //check field contain value sort, if true, push this on listResult
      listSearch.forEach(element => {
        listKey.forEach(item => {
          if (element[item] != undefined && element[item].toString().toLocaleLowerCase().indexOf(value.toString().toLocaleLowerCase()) != -1 && listResult.indexOf(element) == -1) {
            listResult.push(element);
          }
        });
      });
      //return 
      return listResult;
    }
  }

  /**
   * this method sort size byte
   * @param fieldSort
   * @param sortType 
   * @param listSort 
   */
  sortSize<T>(fieldSort: string, sortType: string, listSort: T[]) {
    return listSort.sort(this.compareSize(fieldSort, sortType));
  }


  /**
   * this method compare 2 sizeByte(number)
   */
  private compareSize(fieldSort: string, sortType: string) {
    return (a, b) => {
      let byteA = this.convertByteStringToByteNumber(a[fieldSort]);
      let byteB = this.convertByteStringToByteNumber(b[fieldSort]);
      return sortType === Constants.SORT_ASC ? byteA - byteB : (byteA - byteB) * -1;
    }
  }

  /**
   * this method convert byte, kb, mb, gb to number 
   * @param bytes 
   */
  private convertByteStringToByteNumber(bytes: string) {
    // get unit of bytes => B,MB,GB...
    var unit = bytes.replace(/[0-9.]/g, '').trim();
    // get number of bytes
    var byteNumber = parseFloat(bytes.replace(/[a-zA-Z]/g, '').trim());
    // create sizes
    var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    // get index of unit in sizes
    var index = sizes.indexOf(unit.toUpperCase());
    // return byte
    return Math.pow(1024, index) * byteNumber;
  }

 /**
 * this method sort all file in hisstory minus sizebite
 * @param fieldSort 
 * @param sortType 
 * @param listSort 
 */
  sortList<T>(fieldSort: string, sortType: string, listSort: T[]) {
    return listSort.sort(this.compareList(fieldSort, sortType));
  }


  /**
  * this method compare value of a field in 2 object
  * @param fieldSort 
  * @param sortType 
  */
  private compareList(fieldSort: string, sortType: string) {
    return function (a, b) {
      if (!a[fieldSort] && !b[fieldSort]) {
        return 0;
      } else if (a[fieldSort] && !b[fieldSort]) {
        return sortType === Constants.SORT_DESC ? 1 : -1;
      } else if (!a[fieldSort] && b[fieldSort]) {
        return sortType === Constants.SORT_ASC ? 1 : -1;
      } else {
        var comparison = a[fieldSort].localeCompare(b[fieldSort]);
        return sortType === Constants.SORT_ASC ? comparison : comparison * -1;
      }
    }
  }

  // byte is byte
  convertByte(bytes: number): string {
    if(bytes === 0) {
      return '0 B';
    }
    var i = Math.floor(Math.log(bytes) / Math.log(1024));
    var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
  * method set file's image
  */
  public setImage(value: string) {
    switch (value) {
      case "docx":
      case "doc":
        return "word";
      case "xlsx":
      case "xlx":
        return "excel";
      default:
        return value;
    }
  }

  /**
   * convert date
   * @param date
   */
  public convertDate(date: any) {
    if(date) {
      var d = new Date(date);
      var dformat = [d.getFullYear(),
       this.covertValue((d.getMonth()+1)),
       this.covertValue(d.getDate())].join('/') +' ' +
      [this.covertValue(d.getHours()),
       this.covertValue(d.getMinutes()),
       this.covertValue(d.getSeconds())].join(':');
     return dformat;
    }
  }

  private covertValue(value: number) {
    return value < 10 ? '0'+ value : "" + value; 
  }

  public getListFileError(listError: number[], listFile: any[]): string {
    var error: string = "";
    listError.forEach(id => {
      listFile.forEach(file => {
        if (id == file.id) {
          error += file.name + ",";
          return;
        }
      })
    })
    return error.replace(/.$/, " ");
  }

}
