import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  secondes: number = 0;

  ngOnInit() {
	const result = interval(1000).pipe()
	result.subscribe(
		(value)=>{
			this.secondes = value;
		}
	);
  }
}
