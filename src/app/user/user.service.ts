import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFirestoreDocument} from 'angularfire2/firestore'; 
import {AngularFirestoreCollection} from 'angularfire2/firestore'; 
import {Observable} from 'rxjs/Observable';
import {User} from './user.model'
import { AuthenticationService } from '../angcore/authentication.service';
@Injectable()
export class UserService {
  userCollection:AngularFirestoreCollection<User>
  userDocument:AngularFirestoreDocument<User>
  constructor(private angfs:AngularFirestore,private authenticationservice:AuthenticationService) { }

  getReadingMindsUsers(){
    this.userCollection = this.angfs.collection('users');
    return this.userCollection.valueChanges();
  }

  getReadingMindsUser(id:string){
    
    this.userDocument = this.angfs.doc<User>(`users/${id}`);
    return this.userDocument.valueChanges();
  }


  updateProfileData(displayName :string,photoURL:string){
    const user=this.authenticationservice.authenticationstate;
    const data = {displayName,photoURL}
    return user.updateProfile(data)
    .then(()=>this.angfs.doc(`users/${user.uid}`).update({displayName,photoURL}))
    .then(()=>console.log("Profile Updated"))
    .catch(error=>console.log(error.message))
  }

  updateEmailData(email:string){
    const user = this.authenticationservice.authenticationstate;
    return user.updateEmail(email)
    .then(()=>this.angfs.doc(`users/${user.uid}`).update({email}))
    .then(()=>console.log("Email Updated"))
    .then(user=>{
      this.authenticationservice.authenticationstate.sendEmailVerification()
      .then(()=>console.log("Verification send"))
      .catch(error=>console.log(error.message))
    })
    .catch(error=>console.log(error.message))
  }

  updateUserData(data:any){
    const uid = this.authenticationservice.currentUserId;
    return this.angfs.doc(`users/${uid}`).update(data)
  }

}
