import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { HistoryOperatorService } from './history-operator.service';
import { PagingService } from '../shared/paging/paging.service';
import { HistoryOperator } from '../modal/history-operator';
import { SystemParamService } from '../shared/system-param/system-param.service';
import { Constants } from '../shared/constants/constants';
import { SharedService } from '../shared/shared.service';
import { TranslateCustomService } from '../shared/translate/translate-custom.service';

@Component({
  selector: 'app-history',
  templateUrl: './history-operator.component.html',
  styleUrls: ['./history-operator.component.css']
})

/**
 * this class show history operator with file
 */
export class HistoryOperatorComponent implements OnInit {
  // value from textbox to search
  valueSearch: string = "";
  // create 2 array HistoryOperator, one customizable, and one is origin
  listDataDefault: HistoryOperator[] = [];
  //listDataTemp to search
  listDataTemp: HistoryOperator[] = [];
  // get limitRecord, currentPage, recordTotal, pageTotal for paging
  limitRecord: number;
  currentPage: number;
  recordTotal: number;
  pageTotal: number;
  // fieldSort is field to sort, valueSort is asc or desc
  fieldSort: string = "";
  valueSort: number;
  // listDataShow => number of file show in a page
  listDataShow: HistoryOperator[] = [];
  // message show if don't have history
  message: string;
  // language is browser language
  language: string;
  hiden: boolean;
  /**
   * 
   * @param historyService 
   * @param pagingService 
   */
  constructor(
    private historyService: HistoryOperatorService,
    private translateService: TranslateCustomService,
    private shared: SharedService,
    private router: Router,
    private system: SystemParamService,
    private pagingService: PagingService,
    private spinner: NgxSpinnerService) {
  }

  /**
   * this method initialization component
   */
  ngOnInit() {
    // set default value limit record
    this.limitRecord = Constants.LIMIT_RECORD_PAGE;
    // set default value hiden
    this.hiden = false;
    // set default value valueSort
    this.valueSort = Constants.SORT_VALUE_DEFAULT_HISTORY;
    // set default value fieldSort
    this.fieldSort = Constants.SORT_FIELD_DEFAULT_HISTORY;
    this.language = this.translateService.getLanguage();
    // get listDataDefault from api
    this.getAllHistoryOperator();
  }

  /**
   * this method get all HistoryOperator from server 
   */
   getAllHistoryOperator() {
    this.spinner.show();
    // set default value currentPage
    this.currentPage = 1;
    this.listDataDefault = [];
    this.listDataTemp = [];
    this.historyService.getHistoryData(encodeURI(this.valueSearch.trim())).subscribe(data => {
      //set file for listDataDefault
      data.extra.history.forEach(element => {
        //set up file
        this.listDataDefault.push(this.setUpHistoryOperator(element));
      });
      this.spinner.hide();
      if (this.listDataDefault.length == 0) {
        this.message = Constants.MSG_MEM_0001;
        this.showRecord();
        return;
      } else {
        this.message = "";
        // clone listrecord to listDataTemp
        this.listDataTemp = [...this.listDataDefault];
        // sort data default
        this.sortData(this.fieldSort);
      }
    }, () => {
      this.spinner.hide();
      this.router.navigate([Constants.LINK_SYSTEM_ERROR]);
    })
  }

  /**
    * setup file download files in server and return list
    * @param files 
    */
  setUpHistoryOperator(element: any) {
    // create a HistoryOperator 
    let history = new HistoryOperator();
    // set action upload ỏ download
    history.action = element.action;
    // set date, date in server is utc => convert to local
    history.date = element.time_stamp;
    // set name
    history.fileName = element.file_name;
    // set size, size is byte => convert to kb,mb,gb
    history.size = element.file_size;
    // set userIdRequest
    history.userName = element.user_name;
    // set userIdApproval
    history.userId = element.user_id;
    // set comment
    history.comment = element.comment != "undefined" ? element.comment : '';
    history.systemName = element.system_name;
    return history;
  }

  /**
   * this method to show data in next page if user click 次の20件
   */
  nextPage() {
    this.currentPage = this.pagingService.nextPage(this.currentPage, this.pageTotal);
    this.showRecord();
  }

  /**
   * this method to show data in privious page if user click 前の20件
   */
  prePage() {
    this.currentPage = this.pagingService.prePage(this.currentPage);
    this.showRecord();
  }

  /**
   * show record on one page
   */
  showRecord() {
    // get total record
    this.recordTotal = this.listDataTemp.length;
    // if record total = 0
    if (this.recordTotal == 0) {
      // set value for messagge
      this.message = Constants.MSG_MEM_0001;
      // else
    } else {
      // reset message
      this.message = "";
      // create variable temp
      let temp = parseInt((this.recordTotal / this.limitRecord).toString(), 10);
      // set value for pageTotal
      this.pageTotal = this.recordTotal % this.limitRecord === 0 ? temp : temp + 1;
      // set value listFileShow
      this.listDataShow = this.pagingService.getRecordOnCurrentPage(this.currentPage, this.limitRecord, this.recordTotal, this.listDataTemp);
    }
  }

  /**
   * sort data
   * @param typeSort 
   */
  sortData(fieldSort: string) {
    // get fieldSort
    if (fieldSort != this.fieldSort) {
      this.fieldSort = fieldSort;
      this.valueSort = 1;
    }
    // if valueSort = 0 => no sort
    if (this.valueSort == 0) {
      if (this.fieldSort == Constants.SORT_FIELD_DEFAULT_HISTORY) {
        this.listDataTemp = [...this.listDataDefault];
      } else {
        // set default value valueSort
        this.valueSort = Constants.SORT_VALUE_DEFAULT_HISTORY;
        // set default value fieldSort
        this.fieldSort = Constants.SORT_FIELD_DEFAULT_HISTORY;
        this.listDataTemp = this.shared.sortList(this.fieldSort, Constants.SORT_DESC, this.listDataTemp);
      }
      // if valueSort = 1, sort asc, if valueSort = 2 , sort desc
    } else {
      let sortType = this.valueSort == 1 ? Constants.SORT_ASC : Constants.SORT_DESC;
      // if fieldSort ="size" => this sort is diffirent with all, get listDataTemp
      if (fieldSort === Constants.SORT_FIELD_SIZE) {
        this.listDataTemp = this.shared.sortSize(fieldSort, sortType, this.listDataTemp);
      } else {
        this.listDataTemp = this.shared.sortList(fieldSort, sortType, this.listDataTemp);
      }
    }
    // show data
    this.showRecord();
  }


  /**
   * convert value run around 0, 1, 2
   * @param value 
   */
  convertValueSort(value: number) {
    // if sort is default 
    if (value == 0) {
      // sort asc
      value = 1;
      // if sort asc
    } else if (value == 1) {
      // sort desc
      value = 2
      // if sort desc
    } else {
      // sort default
      value = 0;
    }
    // return
    return value;
  }
}
