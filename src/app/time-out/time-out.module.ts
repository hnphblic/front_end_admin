import { NgModule } from '@angular/core';

import { TimeOutComponent } from './time-out.component';
import {SharedModule} from '../shared/shared.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module'; 

@NgModule({
  declarations: [TimeOutComponent],
  imports: [
    SharedModule,
    HeaderModule,
    FooterModule
  ],
  exports:[TimeOutComponent]
})
export class TimeOutModule { }
