import { NgModule } from '@angular/core';

import { ComplateResetPasswordComponent } from './complate-reset-password/complate-reset-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePasswordConfirmComponent } from './change-password-confirm/change-password-confirm.component';

import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [ComplateResetPasswordComponent,ResetPasswordComponent,ChangePasswordComponent,ChangePasswordConfirmComponent],
  imports: [
    SharedModule,
    HeaderModule,
    FooterModule
  ],
  entryComponents: [ChangePasswordConfirmComponent],
  exports: [ComplateResetPasswordComponent,ResetPasswordComponent,ChangePasswordComponent,ChangePasswordConfirmComponent]
})
export class PasswordModule { }
