import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

  @Input() titre:string;
  @Input() contenu:string;
  @Input() like:number;
  @Input() date:string;

  constructor() { }

  ngOnInit() {
  }

  loveIts() {
    this.like += 1;
  }

  dontLove() {
      this.like -= 1;
  }

}