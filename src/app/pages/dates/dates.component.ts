import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  _currentDate: Date;
  _weekNumber: any;
  _weeksInYears: any;
  _pivotDate: Date; // pivot date.. in case DB is empty
  _pivotDateInFirstBlock = false;
  _doubleWeek: any[] = [];
  _dateFrom: Date;
  _dateTo: Date;
  _block01DateFrom: Date;
  _block01DateTo: Date;
  _block02DateFrom: Date;
  _block02DateTo: Date;

  constructor() {
    this._currentDate = new Date();
    this._weekNumber = this.getWeekNumber(this._currentDate);
    this._weeksInYears = this.weeksInYear(this._currentDate.getFullYear());
    // 26 blocks...
    this._pivotDateInFirstBlock = ((this._weekNumber % 2) > 0);
    if (this._pivotDateInFirstBlock) {
      this._dateFrom = this.getDateOfWeek(this._weekNumber, this._currentDate.getFullYear());
      this._dateTo  = this.getDateOfWeek(this._weekNumber + 1 , this._currentDate.getFullYear());
    } else {
      this._dateFrom = this.getDateOfWeek(this._weekNumber - 1, this._currentDate.getFullYear());
      this._dateTo = this.getDateOfWeek(this._weekNumber, this._currentDate.getFullYear());
    }
  }

  ngOnInit() {}

  public getWeekNumber(d: Date) {
    // Copy date so don't modify original
    d = new Date(+d);
    d.setHours(0, 0, 0);
    // Set to nearest Thursday: current date + 3 - current day number
    // Make Sunday's day number 1
    d.setDate(d.getDate() + 3 - (d.getDay() ) || 1 );
    // Get first day of year
    const yearStart = new Date(d.getFullYear(), 0, 1);
    // Calculate full weeks to nearest Thursday
    const weekNo = Math.ceil(
      ((d.valueOf() - yearStart.valueOf()) / 86400000 + 1) / 7
    );
    // Return array of year and week number
    return weekNo; // [d.getFullYear(), weekNo];
  }

  public weeksInYear(year: number) {
    const d = new Date(year, 11, 31);
    // const week = this.getWeekNumber(d)[1];
    const week = this.getWeekNumber(d);
    // return week === 1 ? this.getWeekNumber(d.setDate(24))[1] : week;
    return week === 1 ? this.getWeekNumber(d.setDate(24)) : week;
  }

  public getDateOfWeek(week: number, year: number) {
    const day = ( (week - 1) * 7);
    // const day = ( 1 + (week - 1) * 7); // 1st of January + 7 days for each week

    return new Date(year, 0, day);
}
}
