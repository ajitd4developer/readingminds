import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AuthenticationService } from "../../angcore/authentication.service";
import { MessageService } from "../message.service";
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  message: string;
  constructor(private route: ActivatedRoute,
    private messageService: MessageService,
    private auth:AuthenticationService
   ) { }

  ngOnInit() {
  }

  handleSubmit(event) {
    if(event.keyCode === 13) {
      this.send()
    }
  }

  send(): void {
    const channelId = this.route.snapshot.paramMap.get("id");
    const photoURL = this.auth.authenticationstate.photoURL;
    const sender = this.auth.authenticationstate.displayName || this.auth.authenticationstate.email;
    const senderId = this.auth.currentUserId;
    const message = this.message;
    this.messageService.sendMessage(
      channelId,
      photoURL,
      sender,
      senderId,
      message
    );
    
  }

}
