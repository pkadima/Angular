import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.scss']
})

export class PremierComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() postLoveIts: number;
	@Input() postDate: Date;
 
  constructor() { }

  ngOnInit() {
  }

  getColor(){
  	if(this.postLoveIts >0){
  		return 'green'; 
  	}else if(this.postLoveIts <0){
  		return 'red';
  	}else{
  		return 'black';
  	}
  }

  onLike(){
  	this.postLoveIts += 1;
  }

  onDislike(){
  	this.postLoveIts -= 1;
  }
}

