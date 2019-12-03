import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { Constants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-complate-reset-password',
  templateUrl: './complate-reset-password.component.html',
  styleUrls: ['./complate-reset-password.component.css']
})

/**
 * show report complate reset password
 */
export class ComplateResetPasswordComponent implements OnInit {
  /**
   * setup Dependency Injection
   * @param translateCustomService 
   */
  constructor(private router: Router) { }

  /**
   * invoked only once when the directive is instantiated
   */
  ngOnInit() {
   
  }
  /**
   * back to login screen
   */
  backToLogin() {
    this.router.navigate([Constants.LINK_LOGIN]);
  }

}
