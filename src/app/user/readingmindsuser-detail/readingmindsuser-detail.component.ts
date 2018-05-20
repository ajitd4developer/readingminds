import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user.model';

@Component({
  selector: 'app-readingmindsuser-detail',
  templateUrl: './readingmindsuser-detail.component.html',
  styleUrls: ['./readingmindsuser-detail.component.css']
})
export class ReadingmindsuserDetailComponent implements OnInit {
  user:User;
  constructor(private route:ActivatedRoute,
    private userService:UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser():void{
    const id = this.route.snapshot.paramMap.get('id')
    this.userService.getReadingMindsUser(id).subscribe(user => this.user = user)
    
  }
}
