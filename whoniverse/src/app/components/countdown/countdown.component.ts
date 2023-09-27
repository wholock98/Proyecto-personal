import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  countdownDate: Date = new Date('2023-11-23T17:30:00');
  timeLeft: any = {};

  constructor() { }

  ngOnInit() {
    this.calculateTimeLeft();
    setInterval(() => {
      this.calculateTimeLeft();
    }, 1000);
  }

  calculateTimeLeft() {
    const now: Date = new Date();
    const difference: number = this.countdownDate.getTime() - now.getTime();

    if (difference > 0) {
      this.timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    } else {
      this.timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  }
}
