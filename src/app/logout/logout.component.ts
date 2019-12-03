import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SystemParamService } from '../shared/system-param/system-param.service';
import { Constants } from '../shared/constants/constants';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

/**
 * this class handle logout event
 */
export class LogoutComponent implements OnInit {
  showLink: boolean = true;
  constructor(
    private router: Router,
    private systemparam: SystemParamService) { }

  /**
   * invoked only once when the directive is instantiated
   */
  ngOnInit() {
    localStorage.clear();
    this.systemparam.getSystemParam().subscribe(system => {
      if (system.extra.system_params.disp_logon_link == Constants.VALUE_TRUE) {
        this.showLink = false;
      }
    }, () => this.router.navigate([Constants.LINK_SYSTEM_ERROR]));
  }

  /**
   * if logout, call service AuthenticationService
   */
  logout() {
    this.router.navigate([Constants.LINK_LOGIN]);
  }
}
