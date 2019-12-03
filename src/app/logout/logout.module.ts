import { NgModule } from '@angular/core';

import { LogoutComponent } from './logout.component';
import {SharedModule} from '../shared/shared.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module'; 

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    SharedModule,
    HeaderModule,
    FooterModule
  ],
  exports:[LogoutComponent]
})
export class LogoutModule { }
