import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { NetworkDirective } from './network/network.directive';

@NgModule({
  declarations: [ NetworkDirective],
  imports: [
    CommonModule,
    TranslateModule,
    NgxSpinnerModule
  ],
  exports:[CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, NgxSpinnerModule, NetworkDirective]
})
export class SharedModule { }
