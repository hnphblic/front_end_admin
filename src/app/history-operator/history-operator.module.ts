import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryOperatorComponent } from './history-operator.component';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HistoryOperatorComponent],
  imports: [
    SharedModule,
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [HistoryOperatorComponent]
})
export class HistoryOperatorModule { }
