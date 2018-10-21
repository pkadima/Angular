import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle:string;
  @Input() postContent:string;
  @Input() postLike:number;
  @Input() postDate:string;

  constructor() { }

  ngOnInit() {

  }

}
