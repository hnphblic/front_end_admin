import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DetailUserService } from './detail-user.service';
import { DetailUser } from '../../modal/detail-user';
import { Constants } from '../../shared/constants/constants';
import { SystemParamService } from '../../shared/system-param/system-param.service';
import { ValidateService } from '../../shared/validate/validate.service';
import { SharedService } from '../../shared/shared.service';
import { HeaderComponent } from 'src/app/header/header.component';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})

/**
 * Displays detailed information of the user who is logged in
 * and update name, email, password of user 
 */
export class DetailUserComponent implements OnInit {

  public detailUser: DetailUser = new DetailUser();
  public disp_admin_contact: boolean;
  public disp_pwchange_link: boolean;
  public disp_edit_profile: boolean;
  public message: string = "";
  public userName: string = "";
  public userMail: string = "";
  public listError: String[] = [];


  /**
   * setup Dependency Injection
   * @param detailUserService 
   * @param route 
   */
  constructor(
    private detailUserService: DetailUserService,
    private router: Router,
    private systemParamService: SystemParamService,
    private validateService: ValidateService,
    private sharedService: SharedService
  ) { }

  /**
   * invoked only once when the directive is instantiated
   */
  ngOnInit() {
    try {
      this.systemParamService.getSystemParam().subscribe(data => {
        // display link contact to admin service
        this.disp_admin_contact = data.extra.system_params.disp_admin_contact;
        // display link change password
        this.disp_pwchange_link = data.extra.system_params.disp_pwchange_link;
        // display edit profile
        this.disp_edit_profile = data.extra.system_params.disp_edit_profile;
      }, err => throwError(err));
      this.getDetailUser();
    } catch (error) {
      this.router.navigate([Constants.LINK_SYSTEM_ERROR]);
    }
  }

  /**
   * send mail to admin service
   */
  sendMailToService() {
    this.systemParamService.sendMailToService().subscribe(
      () => { },
      () => this.router.navigate([Constants.LINK_SYSTEM_ERROR]));
  }

  /**
   * get detailed information of user
   */
  private getDetailUser(): void {
    this.detailUserService.getDetailUser().subscribe(data => {
      this.detailUser.role = data.extra.role;
      this.detailUser.username_inside = data.extra.username_inside;
      this.detailUser.username_outside = data.extra.username_outside;
      this.userName = this.detailUser.name = data.extra.name;
      this.userMail = this.detailUser.email = data.extra.email;
      this.detailUser.password_expire = this.sharedService.convertDate(data.extra.password_expire);
      this.detailUser.user_expire = this.sharedService.convertDate(data.extra.user_expire);
      this.detailUser.quota = this.sharedService.convertByte(data.extra.quota);
      this.detailUser.currentUsage = this.sharedService.convertByte(data.extra.total_size);
      this.detailUser.useRate = data.extra.capacity;
    }, err => throwError(err));
  }

  /**
   * update info user
   */
  updateUser() {
    this.message = '';
    this.validate();
    if (this.listError.length == 0) {
      this.detailUserService.updateUserInfo(this.userName, this.userMail).subscribe(data => {
        if (data.message == Constants.MESSAGE_SUCCESS) {
          this.detailUser.name = this.userName;
          this.detailUser.email = this.userMail;
          // if update user info success
          this.message = Constants.MSG_COM_0001;
          // update header
          HeaderComponent.dataUpdate.next(this.userName);
        }
      }, () => this.router.navigate([Constants.LINK_SYSTEM_ERROR]));
    }
  }

  /**
   * validate value textbox
   */
  private validate() {
    this.listError = [];
    // validate name
    var errorName = this.validateService.validateUserName(this.userName);
    if (errorName != "") {
      this.listError.push(errorName);
    }
    // validate mail
    var errorMail = this.validateService.validateMail(this.userMail);
    if (errorMail != "") {
      this.listError.push(errorMail);
    }
  }
}
