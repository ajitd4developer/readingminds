import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from "@angular/router";
import {AngmaterialModule} from '../angmaterial.module'

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
    AngmaterialModule
  ],
  declarations: []
})
export class AngsharedModule { }
