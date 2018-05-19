import { Injectable } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFirestoreDocument} from 'angularfire2/firestore'; 
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import {Md5} from 'ts-md5/dist/md5'
import { FirebaseApp } from 'angularfire2';

import * as firebase from "firebase/app";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthenticationService {
user: Observable<User>
  authenticationstate:any =null;
  constructor(private angfAuth:AngularFireAuth,
              private angfs:AngularFirestore,
              private router:Router ) {

    this.user = this.angfAuth.authState.switchMap(user => {
      if(user){
        return this.angfs.doc<User>(`users/${user.uid}`).valueChanges();
      }else{
        return Observable.of(null);
      }
    })      
    
    this.angfAuth.authState.subscribe(data=> this.authenticationstate = data)
               }

    readingmindemailSignIn(email:string,password:string){
      return this.angfAuth.auth.signInWithEmailAndPassword(email,password)
      .then(()=>console.log("Reading Minds sign in success"))
      .catch(error =>console.log("Error in sign in " +error.message));
    }

    readingmindemailRegister(email:string,password:string){
      return this.angfAuth.auth.createUserWithEmailAndPassword(email,password).
          then(user => this.updateUserDetails(user))
          .then(()=>console.log("Reading Minds Registration  success"))
          .then(user=>{
            this.angfAuth.auth.currentUser.sendEmailVerification()
            .then(()=>console.log("Email verification have been send to User:"+email ))
            .catch(error =>console.log("Error while sending verification Email " +error.message));
          })
          .catch(error =>console.log("Error in Registration " +error.message));
    }


    updateUserDetails(user){
      const userRef: AngularFirestoreDocument<User> = this.angfs.doc(
        `users/${user.uid}`
      );
      const userdata: User = {
        uid: user.uid,
        email: user.email || null,
        displayName: user.displayName,
        photoURL: user.photoURL ||  "https://www.gravatar.com/avatar/" +
        Md5.hashStr(user.uid) +
        "?d=identicon"
      };
      return userRef.set(userdata, { merge: true });
    }
   
    readingmindsSignOut() {
      return this.angfAuth.auth.signOut().then(() => {
        this.router.navigate(["/"]);
      });

    }

    resetPassword(email: string){
      return firebase.auth().sendPasswordResetEmail(email)
            .then(()=>console.log("Password Reset mail has been sent" +email))
            .catch(error=>console.log(error.message))
    }

    googleSignIn(){
      const provider = new firebase.auth.GoogleAuthProvider();
      return this.socialLogin(provider);
    }

    fbSignIn(){
      const provider = new firebase.auth.FacebookAuthProvider;
      return this.socialLogin(provider);
    }

    twitterSignIn(){
      const provider = new firebase.auth.TwitterAuthProvider;
      return this.socialLogin(provider);
    }

    githubSignIn(){
      const provider = new firebase.auth.GithubAuthProvider;
      return this.socialLogin(provider);
    }

    private socialLogin(provider){
      return this.angfAuth.auth.signInWithPopup(provider)
            .then(credential =>{
              console.log("cREDENTIAL" +credential.user.email);
                return this.updateUserDetails(credential.user)
            })
            .catch(error =>console.log(error.message))
    }
}
