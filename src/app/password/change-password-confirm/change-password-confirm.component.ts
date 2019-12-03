import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import { PasswordService } from '../password.service';
import { Constants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-change-password-confirm',
  templateUrl: './change-password-confirm.component.html',
  styleUrls: ['./change-password-confirm.component.css']
})

/**
 * class confirm user change password
 */
export class ChangePasswordConfirmComponent implements OnInit {

  // create attribute password to get password from change-password component
  oldPass: string;
  newPass: string;
  retypePass: string;
  /**
   * constructor to get pass and pass confirm in dialog
   * @param passwordService 
   * @param router 
   * @param dialogRef 
   * @param data 
   */
  constructor(
    private passwordService: PasswordService,
    public router: Router,
    public dialogRef: MatDialogRef<ChangePasswordConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    dialogRef.disableClose = true;
    this.oldPass = data.oldPass;
    this.newPass = data.newPass;
    this.retypePass = data.retypePass;
  }

  ngOnInit() {
  }

  /**
   * method back to return changepassconfirm
   */
  back() {
    this.dialogRef.close();
  }

  /**
   * method to update pass to db
   */
  changePassword() {
    // call change password
    this.passwordService.updatePassword(this.oldPass, this.newPass, this.retypePass).subscribe(() => {
      // close dialog
      this.dialogRef.close();
      // navigate to detail user
      this.router.navigate([Constants.LINK_DETAIL_USER]);
    }, () => this.router.navigate([Constants.LINK_SYSTEM_ERROR]));
  }
}
