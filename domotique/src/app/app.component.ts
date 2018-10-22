import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number = 0;
  counterSubscription: Subscription;

  ngOnInit() {
	const result = interval(1000).pipe()
	this.counterSubscription = result.subscribe(
		(value: number) => {
			this.secondes = value;
		}
	)
  }

  ngOnDestroy(){
  	this.counterSubscription.unsubscribe();
  }
}
