import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{AngularFireModule} from 'angularfire2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { AngmaterialModule } from './/angmaterial.module';
import { AngcoreModule } from './angcore/angcore.module';
import { AngroutingModule } from './/angrouting.module';
import { environment } from '../environments/environment';
import { AngsharedModule } from './angshared/angshared.module';
import { PostModule } from './post/post.module';


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
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngsharedModule,
    PostModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
