import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.html',
  styleUrls: ['./timer.css'],
  standalone: true,
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() duration: number = 60; // in seconds
  @Output() timeUp = new EventEmitter<void>();

  timeLeft: number = 0;
  private timerSubscription!: Subscription;

  ngOnInit() {
    this.timeLeft = this.duration;
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeUp.emit();
        this.timerSubscription.unsubscribe();
      }
    });
  }

  formatTime(): string {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
