import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import {AngsharedModule} from '../angshared/angshared.module';

import{Routes,RouterModule} from '@angular/router';
import { ResetComponent } from './reset/reset.component';

const angroutes :Routes =  [
  {path:'signin',component:SigninComponent,data:{title:'Reading Minds Sign In '}},
  {path:'register',component:RegisterComponent,data:{title:'Reading Minds Register '}},
  {path:'reset',component:ResetComponent,data:{title:'Reading Minds Reset Password '}},
]

@NgModule({
  imports: [
   
    RouterModule.forChild(angroutes),
    AngsharedModule
  ],
  
  declarations: [SigninComponent, RegisterComponent, ResetComponent]
})
export class AuthenticationModule { }
