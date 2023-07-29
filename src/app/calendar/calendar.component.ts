import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  selected: Date | null;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.selected = null;
  }

private buttonPushed = false;

  get isButtonPushed(): boolean {
    return this.buttonPushed;
  }

  setButtonPushed(value: boolean): void {
    this.buttonPushed = value;
  }
}