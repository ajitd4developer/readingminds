import { NgModule } from '@angular/core';

import{Routes,RouterModule} from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';

const angroutes: Routes = [
  {path :'', redirectTo: '/readingmindsusers' , pathMatch:'full' },
 {path :'', loadChildren:()=>AuthenticationModule }
  
]
@NgModule({
  imports: [
    RouterModule.forRoot(angroutes),
    
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AngroutingModule { }
