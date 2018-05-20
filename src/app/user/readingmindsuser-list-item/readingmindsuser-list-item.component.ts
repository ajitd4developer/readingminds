import { Component, OnInit,Input } from '@angular/core';
import { User } from 'firebase/app';

@Component({
  selector: 'app-readingmindsuser-list-item',
  templateUrl: './readingmindsuser-list-item.component.html',
  styleUrls: ['./readingmindsuser-list-item.component.css']
})


export class ReadingmindsuserListItemComponent implements OnInit {

  @Input() user:User
  constructor() { }

  ngOnInit() {
  }

}
