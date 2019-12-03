import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { TranslateCustomService } from './shared/translate/translate-custom.service';
import { Constants } from './shared/constants/constants';
import { SystemParamService } from './shared/system-param/system-param.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private bnIdle: BnNgIdleService, private router: Router, private translate: TranslateCustomService, 
    private systemParam: SystemParamService) {
    this.systemParam.getSystemParam().subscribe(data => {
      if (typeof data != "undefined") {
        let time: number = +data.extra.system_params.timeout_user;
        this.bnIdle.startWatching(time).subscribe(res => {
          if (res) {
            this.router.navigate([Constants.LINK_TIME_OUT]);
          }
        })
      }
    })
  }

  ngOnInit() {
    this.translate.setLanguage();
  }

}