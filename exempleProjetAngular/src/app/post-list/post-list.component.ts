import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy {

  posts : Post[] ;
  postsSubscription: Subscription; 

  constructor( private postsServices : PostsService) { }
  
  title = 'Application Angular - Blog';

  ngOnInit() {
    this.postsSubscription = this.postsServices.postsSubject.subscribe(
      (posts: Post[]) => {
      	this.posts = posts;
      }
    );
    this.postsServices.getPosts();
  }

  loveIts(id: number) {
    this.postsServices.loveIts(id);
  }

  dontLove(id: number) {
  	this.postsServices.dontLove(id);
  }

  onDeletePost(id: number){
    this.postsServices.removePost(id);
  }

  ngOnDestroy(){
  	this.postsSubscription.unsubscribe();
  }

}