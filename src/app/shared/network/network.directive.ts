import { Directive, ElementRef } from '@angular/core';

import { Constants } from '../constants/constants';
import { SystemParamService } from '../system-param/system-param.service';
import { TranslateCustomService } from '../translate/translate-custom.service';
import { SharedService } from '../shared.service';

@Directive({
  selector: '[appNetwork]'
})

/**
 * this is directive set color base on network is inside or outside
 */
export class NetworkDirective {

  /**
   * constructor inject service need for class
   * @param element 
   * @param shared 
   * @param sysParam 
   */
  constructor(
    private element: ElementRef,
    private sysParam: SystemParamService,
    private sharedSerice: SharedService,
    private translateService: TranslateCustomService
  ) {
    var language = this.translateService.getLanguage();
    this.sysParam.getSystemParam().subscribe(data => {
      //  set color base on network is inside or outside
      this.sharedSerice.checkNetwork().subscribe(network => {
        if (true == network.extra.is_inside) {
          this.element.nativeElement.style.backgroundColor = data.extra.system_params.color_network_local;
          this.element.nativeElement.innerHTML = language == Constants.LANGUAGE_EN ? data.extra.system_params.title_network_local_en : data.extra.system_params.title_network_local_ja;
        } else {
          this.element.nativeElement.style.backgroundColor = data.extra.system_params.color_network_external;
          this.element.nativeElement.innerHTML = language == Constants.LANGUAGE_EN ? data.extra.system_params.title_network_external_en : data.extra.system_params.title_network_external_ja;
        }
      });
    });
  }
}
