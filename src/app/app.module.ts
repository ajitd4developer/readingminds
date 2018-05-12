import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngmaterialModule } from './/angmaterial.module';
import { AngcoreModule } from './angcore/angcore.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngmaterialModule,
    AngcoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
