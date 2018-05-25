import { Component, OnInit } from '@angular/core';
import {User} from '../user.model'
import { AuthenticationService } from '../../angcore/authentication.service';
import { UserService } from '../user.service';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage' ;
import {Location} from '@angular/common'
@Component({
  selector: 'app-readingmindsuser-dashboard',
  templateUrl: './readingmindsuser-dashboard.component.html',
  styleUrls: ['./readingmindsuser-dashboard.component.css']
})
export class ReadingmindsuserDashboardComponent implements OnInit {
  user:User;
  editing = false;
  task:AngularFireUploadTask;
  constructor(private angfs:AuthenticationService,
    private userService:UserService,
    private storage:AngularFireStorage,
    private location:Location) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    return this.angfs.user.subscribe(user=>(this.user = user))
  }

  updateEmail(){
    return this.userService.updateEmailData(this.user.email);
  }
  updateProfile(){
    return this.userService.updateProfileData(this.user.displayName,this.user.photoURL);
  }

  updateUser(){
    const data ={
      website:this.user.website ||null,
      location:this.user.location || null,
      bio:this.user.bio || null

    }
    return this.userService.updateUserData(data)
  }

  redirectBack(){
    this.location.back();
  }
  uploadPhotoURL(event):void{
    const file = event.target.files[0];
    const path =`users/${this.user.uid}/photos/${file.name}`;
    if(file.type.split('/')[0]!=="image"){
      return alert("Please Upload only Images")
    }else{
      this.task = this.storage.upload(path,file)
      this.task.downloadURL().subscribe(url=>{
        this.userService.updateProfileData(this.user.displayName,url)
      })
    }

  }
}
