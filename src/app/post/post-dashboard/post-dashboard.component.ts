import { Component, OnInit, ViewChild } from "@angular/core";
import {FormBuilder,FormControl,FormGroup} from '@angular/forms'
import { PostService } from '../post.service';
import {Post} from '../post.model'
import { AuthenticationService } from '../../angcore/authentication.service';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  @ViewChild('resetMe') inputField: any
  postForm:FormGroup;
    uploadPercent:Observable<number>;
  downloadURL:Observable<string>;
  imageURL:string;
  constructor(private postservice:PostService,
              private authenticationsvc:AuthenticationService,
              private fb:FormBuilder,
              private storage:AngularFireStorage,
              ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.postForm = this.fb.group({
      title:[''],
      content:[''],
      draft:false
    })
  }

  savePost(){
    const formData:Post = {
      author : this.authenticationsvc.authenticationstate.displayName ||
              this.authenticationsvc.authenticationstate.email,
      authorId:this.authenticationsvc.currentUserId,
      title:this.postForm.get('title').value,
      image:this.imageURL || null,
      content:this.postForm.get('content').value,
      draft:this.postForm.get('draft').value||false,
      published: new Date(),
      trending:0
    };
    if(!this.postForm.untouched){
      this.postservice.create(formData);
      this.postForm.reset();
      this.imageURL = '';
this.inputField.nativeElement.value = ''
    }
}
   
  uploadPostImage(event) {
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    if (file.type.split("/")[0] !== "image") {
      return alert("only image files");
    } else {
      const task = this.storage.upload(path, file);
      this.downloadURL = task.downloadURL();
      this.uploadPercent = task.percentageChanges();
      console.log("Image Uploaded!");
      this.downloadURL.subscribe(url => (this.imageURL = url));
    }
  }
}
