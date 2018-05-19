import { NgModule } from '@angular/core';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AuthenticationService } from './authentication.service';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { UserModule } from '../user/user.module';

@NgModule({
  imports: [
  
    AuthenticationModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    UserModule
  ],
  declarations: [],
  providers: [AuthenticationService]
})
export class AngcoreModule { }
