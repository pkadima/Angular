import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service'
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})

export class PostNewComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
  			  private postsService: PostsService,
  			  private routes : Router) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm(){
  	this.postForm = this.formBuilder.group({
  		title: ['', Validators.required],
  		content: ['', Validators.required]
  	});
  }

  onSavePost(){
  	const title = this.postForm.get('title').value;
  	const content = this.postForm.get('content').value;
  	const newPost = new Post(title,content);

  	this.postsService.addNewPost(newPost);
  	this.routes.navigate(['/posts']);
  }
}