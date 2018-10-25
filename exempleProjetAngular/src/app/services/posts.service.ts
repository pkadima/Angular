import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  posts : Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPost(){
  	this.postsSubject.next(this.posts);
  }

  savePosts(){
  	firebase.database().ref('/posts').set(this.posts);
  }

  getPosts(){
    firebase.database().ref('/posts')
      .on('value', (data)=>{
        this.posts = data.val() ? data.val() : [];
        this.emitPost();
      });
  }

  addNewPost(newPost: Post){
    newPost.created_at = new Date().toLocaleString();
    newPost.loveIts = 0;
  	this.posts.push(newPost);
    this.savePosts();
  	this.emitPost();
  }

  removePost(id: number){
  	this.posts.splice(id, 1);
  	this.savePosts();
  	this.emitPost();
  }

  loveIts(id: number){
    this.posts[id].loveIts += 1;
    this.savePosts();
    this.emitPost();
  }

  dontLove(id: number){
    this.posts[id].loveIts -= 1;
    this.savePosts();
    this.emitPost();
  }

}