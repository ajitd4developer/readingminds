import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../angcore/authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
 email:string;
  constructor(private authenticationsvc :AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  resetPassword(email){
    this.authenticationsvc.resetPassword(this.email)
    .then(()=>this.router.navigate(['/signin']))

  }
}
