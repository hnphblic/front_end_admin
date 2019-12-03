import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * provide the paging service
 */
export class PagingService {

  constructor() { }

  /**
   * get next page
   * @param currentPage 
   * @param pageTotal 
   */
  public nextPage(currentPage: number, pageTotal: number) {
    if (currentPage < pageTotal) {
      currentPage = currentPage + 1;
    }
    return currentPage;
  }

  /**
   * get previous page
   * @param currentPage 
   */
  public prePage(currentPage) {
    if (currentPage > 1) {
      currentPage = currentPage - 1;
    }
    return currentPage;
  }

  /**
   * get list record on current page
   * @param currentPage 
   * @param limitRecord 
   * @param recordTotal 
   * @param listData 
   */
  public getRecordOnCurrentPage(currentPage: number, limitRecord: number, recordTotal: number, listData) {
    var startRecord: number = 0;
    var endRecord: number = 1;
    var list = [];

    startRecord = (currentPage - 1) * limitRecord;
    if (startRecord + limitRecord < recordTotal) {
      endRecord = startRecord + limitRecord;
    } else {
      endRecord = recordTotal;
    }
    list = listData.slice(startRecord, endRecord);
    return list;
  }
}

