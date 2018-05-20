import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../user.service';
@Component({
  selector: 'app-readingmindsuser-list',
  templateUrl: './readingmindsuser-list.component.html',
  styleUrls: ['./readingmindsuser-list.component.css']
})
export class ReadingmindsuserListComponent implements OnInit {
  users:Observable<any[]>
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getReadingMindsUser();
  }

  getReadingMindsUser(){
    this.users = this.userService.getReadingMindsUsers();
  }
}
