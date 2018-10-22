import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent{

  @Input() postTitle:string;
  @Input() postContent:string;
  @Input() postLike:number;
  @Input() postDate:string;

  loveIts() {
    this.postLike += 1;
  }

  dontLove() {
      this.postLike -= 1;
  }

  constructor() {}

}