import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { ChangePasswordConfirmComponent } from '../change-password-confirm/change-password-confirm.component';
import { SystemParamService } from '../../shared/system-param/system-param.service';
import { PasswordService } from '../password.service';
import { Constants } from 'src/app/shared/constants/constants';
import { ValidateService } from 'src/app/shared/validate/validate.service';

@Component({
  selector: 'app-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})

/**
 * this component handle about change password
 */
export class ChangePasswordComponent implements OnInit {
  // error
  showMessageError: boolean = false;
  // min password user must input
  passwordLevel: number;

  // password and pass confirm
  oldPass: string = "";
  newPass: string = "";
  retypePass: string = "";
  showNotification: boolean = true;
  // erro
  listError: string[] = [];

  /**
   * constructor of class
   * @param systemParamService 
   * @param formBuilder 
   * @param activatedRoute 
   * @param passwordService 
   * @param router 
   * @param dialog 
   */
  constructor(
    private systemParamService: SystemParamService,
    public activatedRoute: ActivatedRoute,
    private passwordService: PasswordService,
    public router: Router,
    private validateService: ValidateService,
    public dialog: MatDialog) {

  }

  /**
   * we call createForm to create form repository password and passconfirm
   */
  ngOnInit() {
    // call systemparam to get useAutogenPassword and passwordLevel
    this.systemParamService.getSystemParam().subscribe(data => {
      this.passwordLevel = data.extra.system_params.password_level;
    }, () => this.router.navigate([Constants.LINK_SYSTEM_ERROR]))
  }

  /**
   * open dialog change password confirm
   */
  openDialog() {
    this.listError = this.validateService.validatePassword(this.oldPass, this.newPass, this.retypePass);
    this.showNotification = false;
    //call api check password
    if (this.listError.length == 0) {
      this.passwordService.validatePassword(this.oldPass, this.newPass, this.retypePass).subscribe(result => {
        //if validate have error, set error for messageErr
        if (Constants.MSG_PASSWORD_VALID != result.message) {
          this.listError.push(`ERROR.${result.message}`);
          this.resetvalue();
        }
        // if not error
        if (this.listError.length == 0) {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.data = {
            oldPass: this.oldPass,
            newPass: this.newPass,
            retypePass: this.retypePass
          };
          // open dialog
          this.dialog.open(ChangePasswordConfirmComponent, dialogConfig);
        } else {
          this.resetvalue();
        }
      }, () => this.router.navigate([Constants.LINK_SYSTEM_ERROR]));
    } else {
      this.resetvalue();
    }
  }

  /**
   * this method reset oldPass, newPass, retypePass
   */
  private resetvalue() {
    this.oldPass = "";
    this.newPass = "";
    this.retypePass = "";
  }

  /**
   * go to detail-user view
   */
  back() {
    this.router.navigate([Constants.LINK_DETAIL_USER]);
  }
}
