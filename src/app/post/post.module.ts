import { NgModule } from '@angular/core';
import {AngsharedModule} from '../angshared/angshared.module';
import { PostService } from './post.service';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import{Routes,RouterModule} from '@angular/router';

const angroutes :Routes =  [
  {path:'blog',component:PostListComponent,data:{title:'ReadingMinds Blog Post List '}},
  {path:'blog/:id',component:PostDetailComponent,data:{title:'Reading Minds Blog Post Details '}},
]
@NgModule({
  imports: [
    AngsharedModule,
    RouterModule.forChild(angroutes),
  ],
  exports:[PostDashboardComponent],

  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent, PostListItemComponent],
  providers: [PostService]
})
export class PostModule { }
