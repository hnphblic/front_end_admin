import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';

import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    SharedModule,
    FileUploadModule,
    HeaderModule,
    FooterModule
  ],
  exports:[MainComponent]
})
export class MainModule { }
