import { Component, OnInit,Input } from '@angular/core';
import {Message } from '../message.model'
import { MessageService } from '../message.service';
import { AuthenticationService } from '../../angcore/authentication.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message:Message;
  constructor(private messageService: MessageService,
  private auth:AuthenticationService) { }

  ngOnInit() {
  }

}
