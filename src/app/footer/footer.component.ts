import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SystemParamService } from '../shared/system-param/system-param.service';
import { Constants } from '../shared/constants/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

/**
 * this method handle footer show or hide
 */
export class FooterComponent implements OnInit {

  // variable set copy right show or hide
  copyright: boolean = false;
  // variable set footer show or hide
  dispFooter: boolean = false;

  /**
   * constructor
   * @param system 
   */
  constructor(private system: SystemParamService, private router: Router) { }

  /**
   * invoked only once when the directive is instantiated
   */
  ngOnInit() {
    // get data from system service
    this.system.getSystemParam().subscribe(data => {
      if (typeof data != "undefined") {
          // set value for dispFooter
        this.dispFooter = data.extra.system_params.disp_footer == Constants.VALUE_TRUE;
        if (this.dispFooter) {
          // set value for copyright
          this.copyright = data.extra.system_params.disp_copyright == Constants.VALUE_TRUE;
        }
      }
    }, () => this.router.navigate([Constants.LINK_SYSTEM_ERROR]));
  }
}
