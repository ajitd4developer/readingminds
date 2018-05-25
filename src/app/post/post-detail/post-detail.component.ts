import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';
import {Post} from '../post.model';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post:Post;
  constructor(private route:ActivatedRoute,
    private postservice:PostService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.postservice.getPostData(id).subscribe(post => (this.post = post));
  }
}
