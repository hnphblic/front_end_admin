import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS }     from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule  }     from './app-routing.module';
import { MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { BnNgIdleService } from 'bn-ng-idle';

import { AppComponent }         from './app.component';
import { TokenInterceptor } from './shared/interceptor/token-interceptor.service';
import { AuthGuardService } from './shared/interceptor/auth-guard.servicce';
import { MainModule } from  './main/main.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { HistoryOperatorModule } from './history-operator/history-operator.module';
import { ListFileDownloadModule } from './download/list-file-download.module';
import { PasswordModule } from './password/password.module';
import { ApproveModule } from './approve/approve.module';
import { Constants } from './shared/constants/constants';
import { SystemErrorComponent } from './system-error/system-error.component';
import { LogoutModule } from './logout/logout.module';
import { TimeOutModule } from './time-out/time-out.module';
import { TreeviewModule } from 'ngx-treeview';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

export function tokenGetter() {
  return localStorage.getItem(Constants.NAME_TOKEN);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SystemErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    UserModule,
    LoginModule,
    MainModule,
    PasswordModule,
    ListFileDownloadModule,
    ApproveModule,
    HistoryOperatorModule,
    ReactiveFormsModule,
    LogoutModule,
    TimeOutModule,
    FormsModule,
    TreeviewModule.forRoot(),
    AngularFontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost"],
      }
    }),
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      }
    ),

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    AuthGuardService,
    JwtHelperService,
    BnNgIdleService,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
