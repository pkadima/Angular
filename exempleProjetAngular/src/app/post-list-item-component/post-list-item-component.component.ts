import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})

export class PostListItemComponentComponent implements OnInit {

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