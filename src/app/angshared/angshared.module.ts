import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from "@angular/router";
import {AngmaterialModule} from '../angmaterial.module';
import { FromNowPipe } from './from-now.pipe';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload/upload.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AngmaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngmaterialModule,
    FromNowPipe,
    UploadComponent
  ],
  declarations: [FromNowPipe, UploadComponent],
  providers: [UploadService]
})
export class AngsharedModule { }
