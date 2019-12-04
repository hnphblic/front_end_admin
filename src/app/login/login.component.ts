import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { SystemParamService } from '../shared/system-param/system-param.service';
import { AuthenticationService } from '../shared/authentication/authentication.service';
import { Constants } from '../shared/constants/constants';
import { TranslateCustomService } from '../shared/translate/translate-custom.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-input',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**
 * 
 * this class handle event login
 * 
 */
export class LoginComponent implements OnInit {

  // create variable 2-way bindding
  id: string = "";
  password: string = "";
  // create variable properti for show or hide a field
  showResetPassword: boolean;
  showError: boolean;
  messageError: string;
  showLogo: boolean;
  logo: string;

  @ViewChild('userName', { static: false }) private userName: ElementRef;
  /**
   * constructor inject service need for class
   * @param route 
   * @param systemParamService 
   * @param auth 
   * @param translateService 
   */
  constructor(
    private route: Router,
    private systemParamService: SystemParamService,
    private sharedSerice: SharedService,
    private auth: AuthenticationService,
    private translate: TranslateCustomService) {
  }
  
  /**
   * this method run when this component was created
   */
  ngOnInit() {
    // call init
    //this.init();
    this.messageError = Constants.ERR_COM_0006;
    // get token from localstorage, if user login before, they don't need login
    // decode token
    if (localStorage.getItem(Constants.NAME_TOKEN) != null) {
      const decode = new JwtHelperService().decodeToken(localStorage.getItem(Constants.NAME_TOKEN));
      // call checkNavigate if user_expired or password expired
      this.navigate(decode);
    }
  }

  /**
   * method init view, get need values from systemParam service to show or hide fields in view
   */
  init(): void {
    // call systemparam service to get attributes need and set value for attributes of component
    this.systemParamService.getSystemParam().subscribe(system => {
      this.showLogo = system.extra.system_params.user_logo_image_visible;
      //this.logo = system.extra.system_params.user_logo_image;
      this.logo = "/assets/images/logo.png";
      this.showResetPassword = true//system.extra.system_params.disp_forget_pw == Constants.VALUE_TRUE;
    }, () => this.route.navigate([Constants.LINK_SYSTEM_ERROR]));
  }

  /**
   * login method run when user click login button in view
   */
  login() {
    // if id or pass null, show error
    if (!this.id || !this.password) {
      this.id = "";
      this.password = "";
      this.showError = true;
      this.userName.nativeElement.focus();
      // if id and password not null, call api to post id and pass to server, server return data - this repository token
    } else {
      this.auth.login({ 'username': this.id.trim(), 'password': this.password.trim() }).subscribe((data: any) => {
        if (typeof data == "undefined") {
          this.showError = true;
          this.id = "";
          this.password = "";
          return;
        }
       
        // put code into try catch cause server can die
        // if login success, decode token and checknavigate, this will forward to reasonable link
        if (data.message === Constants.MESSAGE_SUCCESS) {
          const decode = new JwtHelperService().decodeToken(data.extra.jwt);
          this.navigate(decode);
          // else, id or password is incorect
        } else {
          this.showError = true;
          this.userName.nativeElement.focus();
        }
        //check if not error, set token to localstorage
        if (!this.showError) {
          localStorage.setItem(Constants.NAME_TOKEN, data.extra.jwt);
        } else {
          this.id = "";
          this.password = "";
        }
      },() => {
          this.route.navigate([Constants.LINK_SYSTEM_ERROR]);
        });
    }
  }

  

  /**
   * method check data from server return and handle it, and forward to reasonable link
   * @param data 
   */
  private navigate(data: any) {
    const screenCode = data.screen_code;
    this.showError = false;
    if (screenCode && Constants.SCREEN_CODE_CHANGE_PASSWORD == screenCode) {
      localStorage.setItem(Constants.ID, data.id);
      this.route.navigate([Constants.LINK_CHANGE_PASSWORD]);
    } else if (screenCode && Constants.SCREEN_CODE_RESET_PASSWORD == screenCode) {
      this.route.navigate([Constants.LINK_RESET_PASSWORD]);
    } else {
      this.route.navigate([Constants.LINK_MAIN]);
    }
  }
}
