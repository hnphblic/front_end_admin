import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './password/change-password/change-password.component';
import { ResetPasswordComponent } from './password/reset-password/reset-password.component';
import { MainComponent } from './main/main.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService as AuthGuard} from './shared/interceptor/auth-guard.servicce';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { ComplateResetPasswordComponent } from './password/complate-reset-password/complate-reset-password.component';
import { TimeOutComponent } from './time-out/time-out.component';
import { SystemErrorComponent } from './system-error/system-error.component';
import { HistoryOperatorComponent } from './history-operator/history-operator.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'complete-reset-password', component: ComplateResetPasswordComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'timeout', component: TimeOutComponent, canActivate: [AuthGuard]},
  { path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard]},
  { path: 'detail-user', component: DetailUserComponent,canActivate: [AuthGuard]},
  { path: 'history', component: HistoryOperatorComponent, canActivate: [AuthGuard]},
  { path: 'system-error', component: SystemErrorComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
