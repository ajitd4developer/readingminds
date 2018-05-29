import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore'
import { AuthenticationService } from '../angcore/authentication.service'
import { AngularFireStorage } from 'angularfire2/storage'
import { Observable } from "rxjs/Observable";

@Injectable()
export class GalleryService {
  galleryCollection: AngularFirestoreCollection<any>
  galleryDoc: AngularFirestoreDocument<any>
  

  constructor(
    private afs: AngularFirestore,
    private auth: AuthenticationService,
    private storage: AngularFireStorage
  ) {}

  getImages() {
    // wrap the fn inside this switchMap to get the userId
    // this way we get the id before mouting the component
    return this.auth.user.switchMap(user => {
      // here check if there is an user
      if (user) {
        const uid = this.auth.currentUserId
        this.galleryCollection = this.afs.collection(`users/${uid}/gallery`)
        return this.galleryCollection.snapshotChanges().map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data()
            const id = a.payload.doc.id
            return { id, ...data }
          })
        })
      } else {
        // or just return a no user
        return Observable.of(null)
      }
    })
  }

  getImage(id: string) {
    const uid = this.auth.currentUserId
    this.galleryDoc = this.afs.doc(`users/${uid}/`)
    return this.galleryDoc.valueChanges()
  }

  deleteImage(id: string, name: string) {
    const uid = this.auth.currentUserId
    const imageRef = this.storage
      .ref(`users/${uid}/gallery`)
      .child(name)
      .delete()
    this.afs.doc(`users/${uid}/gallery/${id}`).delete()
    console.log("Image deleted!")
  }
  
}
