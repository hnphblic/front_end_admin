import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { MainService } from './main.service';
import { Constants } from '../shared/constants/constants';
import { TranslateCustomService } from '../shared/translate/translate-custom.service';
import { ModemService } from '../shared/modem/modem.service';
import { ModemModel } from '../modal/modem-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

/**
 * class main operation of user
 */
export class MainComponent implements OnInit {

  public static dataUpdate: Subject<string> = new Subject<string>();
  message: string;

  serials: any = [];
  serials_tmp: any = [];
  /**
   * constructor 
   * @param route 
   * @param mainService 
   * @param fileService 
   * @param sysParam 
   * @param location 
   */
  constructor(
    private route: Router,
    private translateService: TranslateCustomService,
    private mainService: MainService,
    private spinner: NgxSpinnerService,
    private modem: ModemService,
    
  ) { }

  /**
   * method init view
   */
  ngOnInit() {
    try {
      this.spinner.show();
      //get language of localstrogare
      const decode = new JwtHelperService().decodeToken(localStorage.getItem(Constants.NAME_TOKEN));
      this.message = Constants.MSG_COM_0002;
      this.loadmodem();
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.route.navigate([Constants.LINK_SYSTEM_ERROR]);
    }
  }

  /**
   * Load modem
   */
  loadmodem()
  {
    this.modem.getModem().subscribe((data: any) => {
      if (typeof data == "undefined" || typeof data.extra == "undefined") {
        //this.message = Constants.MSG_MEM_0001;
      }else{
        data.extra.list_modem.forEach(element => {
          this.serials.push(this.setModem(element));
        });
        if (this.serials.length == 0) {
          this.message = Constants.MSG_MEM_0001;
          return;
        } else {
          this.message = "";
        }
      }
      
    },() => {
      this.route.navigate([Constants.LINK_SYSTEM_ERROR]);
    });
  }

  
  /**
    * setup file download files in server and return list
    * @param files 
    */
   setModem(element: any) {
    // create a HistoryOperator 
    let modem = new ModemModel();
    modem.index = element.index;
    modem.index_simbank = element.current_bank;
    modem.port = element.name;
    modem.infor = element.infor;
    modem.status = element.status;
    return modem;
  }
  /**
   * Connect modem
   * @param event 
   */
  connect() {
    if (this.serials.length == 0) {
      this.message = Constants.MSG_MEM_0001;
      return;
    } else {
      this.spinner.show();
      this.message = "";
      this.serials.forEach(value => {
          this.modem.loadModem(value.port).subscribe((data: any) => {
            if (typeof data == "undefined") {
              //this.route.navigate([Constants.LINK_SYSTEM_ERROR]);
            }else{
              this.updateValueSerials(data.extra.modem, 0)
              console.log(this.serials)
              console.log(this.serials_tmp)
            }
          },() => {
            this.route.navigate([Constants.LINK_SYSTEM_ERROR]);
          });
      });
      this.spinner.hide();
    } 
  }

  updateValueSerials(element: any, index: any){
    MainComponent.dataUpdate.subscribe(res => {
        if(element.port == this.serials[index].value.port){
          this.serials[index].value.status = element.status;
          this.serials[index].value.infor = element.infor;
          this.serials[index].value.phone = element.phone;
        }
    });
  }

  /**
   * load phone
   * @param event 
   */
  loadphone() {
    
    this.modem.getModem().subscribe((data: any) => {
      if (typeof data == "undefined") {
        this.route.navigate([Constants.LINK_SYSTEM_ERROR]);
      }else{
        data.extra.list_modem.forEach(element => {
          this.serials.push(this.setModem(element));
        });
        if (this.serials.length == 0) {
          this.message = Constants.MSG_MEM_0001;
          return;
        } else {
          this.message = "";
        }
      }
      
    },() => {
      this.route.navigate([Constants.LINK_SYSTEM_ERROR]);
    });
  }
}
