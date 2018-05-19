import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{AngularFireModule} from 'angularfire2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngmaterialModule } from './/angmaterial.module';
import { AngcoreModule } from './angcore/angcore.module';
import { AngroutingModule } from './/angrouting.module';
import { environment } from '../environments/environment';
import { AngsharedModule } from './angshared/angshared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngmaterialModule,
    AngcoreModule,
    AngroutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngsharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
