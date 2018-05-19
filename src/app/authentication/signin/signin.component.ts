import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {Router} from '@angular/router';
import {Observable} from 'rxjs/observable';
import {AngsharedModule} from '../../angshared/angshared.module';
import {AuthenticationService} from '../../angcore/authentication.service';
import { EmailAuthProvider } from '@firebase/auth-types';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  readingMindSignInForm : FormGroup;
  formhide = true;
  constructor(
    public angfb :FormBuilder,
    public authenticationsvc :AuthenticationService,
    private router:Router
  ) {
    this.readingMindSignInForm =this.angfb.group({
      email: ['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(7),Validators.maxLength(15),Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$")]]
    })
   }

  ngOnInit() {

    
  }
  get email(){
    return this.readingMindSignInForm.get('email')
   }

   get password(){
     return this.readingMindSignInForm.get('password')
   }

   readingmindsSignIn() {
    return  this.authenticationsvc.readingmindemailSignIn(this.email.value,this.password.value)
                .then(user=>{
                  this.router.navigate(["/"]);
                  if(this.readingMindSignInForm.valid){
                    console.log("Valid form");
                    this.router.navigate(["/"]);
                  }
                })
   }
}
