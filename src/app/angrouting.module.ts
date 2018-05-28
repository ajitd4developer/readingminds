import { NgModule } from '@angular/core';

import{Routes,RouterModule} from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import {GalleryListComponent} from './gallery/gallery-list/gallery-list.component'
import { GalleryModule } from './gallery/gallery.module';
const angroutes: Routes = [
  {path :'', redirectTo: '/chat' , pathMatch:'full' },
  {path :'', loadChildren:"./chat/chat.module#ChatModule" },

 {path :'', loadChildren:"./authentication/authentication.module#AuthenticationModule" },
 { path: '', loadChildren: './gallery/gallery.module#GalleryModule' },


  
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
