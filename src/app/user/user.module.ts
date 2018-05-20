import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import {AngsharedModule} from '../angshared/angshared.module';
import{Routes,RouterModule} from '@angular/router';
import { ReadingmindsuserDashboardComponent } from './readingmindsuser-dashboard/readingmindsuser-dashboard.component';
import { ReadingmindsuserDetailComponent } from './readingmindsuser-detail/readingmindsuser-detail.component';
import { ReadingmindsuserListComponent } from './readingmindsuser-list/readingmindsuser-list.component';
import { ReadingmindsuserListItemComponent } from './readingmindsuser-list-item/readingmindsuser-list-item.component';

const angroutes :Routes =  [
  {path:'me',component:ReadingmindsuserDashboardComponent,data:{title:'ReadingMinds My Dashboard '}},
  {path:'readingmindsusers',component:ReadingmindsuserListComponent,data:{title:'Reading Minds Users list '}},
  {path:'readingmindsusers/:id',component:ReadingmindsuserDetailComponent,data:{title:'Reading Minds Profile '}},
]

@NgModule({
  imports: [
    AngsharedModule,
    
    RouterModule.forChild(angroutes),
  ],
  exports: [
    ReadingmindsuserListItemComponent
  ],
  declarations: [ReadingmindsuserDashboardComponent, ReadingmindsuserDetailComponent, ReadingmindsuserListComponent, ReadingmindsuserListItemComponent],
  providers: [UserService]
})
export class UserModule { }
