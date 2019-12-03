import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})

/**
 * provide the validate service
 */
export class ValidateService {

  constructor() { }

  /**
   * check half size
   * @param value
   */
  public isHalfsize(value: string) {
    return value.match("^[\x00-\x7F].*$");
  }

  /**
   * check empty
   * @param value 
   */
  public isEmpty(value: string): boolean {
    return value == null || value === undefined || value == '';
  }

  /**
   * validate password
   * @param password 
   * @param newPassword 
   * @param passwordRetype 
   */
  public validatePassword(password: string, newPassword: string, passwordRetype) {
    var arrayError: string[] = [];

    if (this.isEmpty(password)) {
      arrayError.push(Constants.ERR_VAL_0001_PASSWORD);
    }

    if (this.isEmpty(newPassword)) {
      arrayError.push(Constants.ERR_VAL_0001_NEW_PASSWORD);
    } else if (!this.checkMaxNumberLength(Constants.MAX_NUMBER_PASSWORD, newPassword)) {
      arrayError.push(Constants.ERR_VAL_0005_PASSWORD);
    } else if (!this.isHalfsize(newPassword)) {
      arrayError.push(Constants.ERR_VAL_0002_PASSWORD);
    }

    if (this.isEmpty(passwordRetype)) {
      arrayError.push(Constants.ERR_VAL_0001_PASSWORDCONFIRM);
    }
    return arrayError;
  }

  /**
  * check number length
  * @param maxLength 
  * @param value 
  */
  public checkMaxNumberLength(maxLength: number, value: string) {
    return value.length <= maxLength;
  }

  /**
   * validate mail address
   */
  public validateMail(value: string) {
    var error: string = "";
    if (this.isEmpty(value)) {
      error = Constants.ERR_VAL_0001_MAIL;
    } else if (!this.checkMaxNumberLength(Constants.MAX_NUMBER_LENGTH_MAIL, value)) {
      error = Constants.ERR_VAL_0005_MAIL;
    } else if (!this.isHalfsize(value)) {
      error = Constants.ERR_VAL_0002_MAIL;
    }
    return error;
  }

  /**
   * validate mail address when update from detail user screen
   * @param value 
   */
  public validateMailUpdate(value: string) {
    var error: string = null;
    if (!this.checkMaxNumberLength(Constants.MAX_NUMBER_LENGTH_MAIL, value)) {
      error = Constants.ERR_VAL_0005_MAIL;
    } else if (!this.isHalfsize(value)) {
      error = Constants.ERR_VAL_0002_MAIL;
    }
    return error;
  }

  /**
   * validate user name
   */
  public validateUserName(value: string) {
    var error: string = "";
    if (!this.checkMaxNumberLength(Constants.MAX_NUMBER_LENGTH_NAME, value)) {
      error = Constants.ERR_VAL_0005_NAME;
    }
    return error;
  }

  /**
   * validate user id
   * @param value 
   */
  public validateUserID(value: string) {
    var error: string = "";
    if (this.isEmpty(value)) {
      error = Constants.ERR_VAL_0001_USERID;
    } else if (!this.checkMaxNumberLength(Constants.MAX_NUMBER_LENGTH_USER_ID, value)) {
      error = Constants.ERR_VAL_0005_USERID;
    } else if (!this.isHalfsize(value)) {
      error = Constants.ERR_VAL_0002_USERID;
    }
    return error;
  }

  /**
   * validate comment
   * @param value 
   */
  public validateComment(value: string) {
    var error: string = "";
    if (this.isEmpty(value)) {
      error = Constants.ERR_VAL_0001_COMMENT;
    } else if (!this.checkMaxNumberLength(Constants.MAX_NUMBER_LENGTH_COMMENT, value)) {
      error = Constants.ERR_VAL_0005_COMMENT;
    }
    return error;
  }
}
