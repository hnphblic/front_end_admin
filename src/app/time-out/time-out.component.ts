import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../shared/authentication/authentication.service';
import { Constants } from '../shared/constants/constants';

@Component({
  selector: 'app-time-out',
  templateUrl: './time-out.component.html',
  styleUrls: ['./time-out.component.css']
})

/**
 * this class show if user not operation to expired
 */
export class TimeOutComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  /**
   * when go to this screen, we remove NAME_TOKEN, if user reload => login
   */
  ngOnInit() {
    localStorage.removeItem(Constants.NAME_TOKEN);
  }

  /**
   * when click => call AuthenticationService
   */
  timeout() {
    this.authenticationService.logOut();
  }

}
