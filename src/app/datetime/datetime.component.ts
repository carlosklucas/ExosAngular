import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit, OnDestroy {
  currentDateTime: Date = new Date();
  private timerSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    // Update current date and time every second
    this.timerSubscription = interval(1000)
      .subscribe(() => {
        this.currentDateTime = new Date();
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the timer observable to avoid memory leaks
    this.timerSubscription.unsubscribe();
  }
}
