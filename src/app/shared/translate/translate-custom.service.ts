import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

/**
 * provide the translate service
 */
export class TranslateCustomService {
  private browserLang: string = "en";
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'ja']);
    this.translate.setDefaultLang('en');
    this.browserLang = this.translate.getBrowserLang().match(/en|ja/) ? this.translate.getBrowserLang() : "en";
  }

  getLanguage() {
    return this.browserLang;
  }

  public setLanguage() {
    this.translate.use(this.browserLang);
  }

  public getMessage(message: string[]) {
    return this.translate.get(message);
  }
}
