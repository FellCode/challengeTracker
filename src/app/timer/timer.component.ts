import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  private timer: any;
  private startTime: number = 0;
  public isRunning: boolean = false;
  public elapsedTime: number = 0;

  @Output()
  timeUpdated = new EventEmitter<number>();

  ngOnInit() {
    // Load elapsed time from localStorage when the component initializes
    const storedTime = localStorage.getItem('elapsedTime');
    if (storedTime) {
      this.elapsedTime = parseInt(storedTime, 10);
    }
  }

  get formattedTime(): string {
    const seconds = this.elapsedTime % 60;
    const minutes = Math.floor((this.elapsedTime / 60) % 60);
    const hours = Math.floor(this.elapsedTime / 3600);
    return `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
  }

  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  private saveElapsedTime() {
    // Save elapsed time to localStorage
    localStorage.setItem('elapsedTime', this.elapsedTime.toString());
    this.timeUpdated.emit(this.elapsedTime)
  }

  // ... (previous methods remain unchanged)

  startTimer() {
    if (!this.isRunning) {
      this.startTime = Date.now() - this.elapsedTime * 1000;
      this.timer = setInterval(() => {
        this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
        this.saveElapsedTime(); // Save elapsed time to localStorage on every tick
      }, 1000);
      this.isRunning = true;
    }
  }

  pauseTimer() {
    if (this.isRunning) {
      clearInterval(this.timer);
      this.isRunning = false;
      this.saveElapsedTime(); // Save elapsed time to localStorage when paused
    }
  }

  stopTimer() {
    if (this.isRunning) {
      clearInterval(this.timer);
      this.isRunning = false;
    }
    this.saveElapsedTime(); // Save elapsed time to localStorage when stopped
    this.elapsedTime = 0;
  }
}
