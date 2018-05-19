import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {Router} from '@angular/router';
import {Observable} from 'rxjs/observable';
import {AngsharedModule} from '../../angshared/angshared.module';
import {AuthenticationService} from '../../angcore/authentication.service';
import { EmailAuthProvider } from '@firebase/auth-types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  readingMindRegisterForm : FormGroup;
  formhide = true;
  constructor(
    public angfb :FormBuilder,
    private authenticationsvc :AuthenticationService,
    private router:Router
  ) {
    this.readingMindRegisterForm =this.angfb.group({
      email: ['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(7),Validators.maxLength(15),Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$")]]
    })
   }

  ngOnInit() {

    
  }
  get email(){
    return this.readingMindRegisterForm.get('email')
   }

   get password(){
     return this.readingMindRegisterForm.get('password')
   }

   readingmindsRegister() {
    return  this.authenticationsvc.readingmindemailRegister(this.email.value,this.password.value)
                .then(user=>{
                  if(this.readingMindRegisterForm.valid){
                    console.log("Valid form");
                    this.router.navigate(["/"]);
                  }else{
                    this.router.navigate(["/"]);
                  }
                })
   }

}
