import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PasswordService } from '../password.service';
import { SystemParamService } from 'src/app/shared/system-param/system-param.service';
import { Constants } from '../../shared/constants/constants';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

/**
 * [COM0003] reset password when forgot user ID and password
 */
export class ResetPasswordComponent implements OnInit {

  userID: string;
  disp_admin_contact: boolean;

  /**
   * setup Dependency Injection
   * @param passwordService 
   * @param router 
   * @param translateCustomService 
   * @param systemParamService 
   */
  constructor(
    private passwordService: PasswordService,
    private router: Router,
    private systemParamService: SystemParamService) { }

  /**
   *  invoked only once when the directive is instantiated
   */
  ngOnInit() {
    this.systemParamService.getSystemParam().subscribe(data => {
      this.disp_admin_contact = data.extra.system_params.disp_admin_contact == Constants.VALUE_TRUE;
    }, () => this.router.navigate([Constants.LINK_SYSTEM_ERROR]));
  }

  /**
   * back to login screen
   */
  backToLogin() {
    this.router.navigate([Constants.LINK_LOGIN])
  }
  
  /**
   * reset password
   */
  resetPassword() {
    this.passwordService.resetPassword(this.userID).subscribe();
    this.router.navigate([Constants.LINK_COMPLATE_RESET_PASSWORD]);
  }

  /**
   * send mail to admin service
   */
  sendMailToService() {
    this.systemParamService.sendMailToService().subscribe();
  }
}