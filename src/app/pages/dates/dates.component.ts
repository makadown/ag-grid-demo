import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  _currentDate: Date;
  _weekNumber: any;
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
    // Testing a date belonging to a second block (ex. 2018-12-25)
    // this._currentDate = new Date(2018, 11, 25 ); /* Months are indexed from 0 */

    // In Case DB is empty...
    this._pivotDate = this._currentDate;
    this.buildDateTables();
  }

  public buildDateTables() {
    console.log ('Pivot now is ' + this._pivotDate) ;
    this._weekNumber = this.getWeekNumber(this._pivotDate);
    // 26 blocks... 52 weeks most of the time.
    this._pivotDateInFirstBlock = this._weekNumber % 2 > 0;
    if (this._pivotDateInFirstBlock) {
      this._dateFrom = this.getFirstDateOfWeek(
        this._weekNumber,
        this._pivotDate.getFullYear()
      );
      this._block01DateFrom = this.getFirstDateOfWeek(
        this._weekNumber,
        this._pivotDate.getFullYear()
      );
      this._block01DateTo = this.getLastDateOfWeek(
        this._weekNumber,
        this._pivotDate.getFullYear()
      );

      this._dateTo = this.getLastDateOfWeek(
        this._weekNumber + 1,
        this._pivotDate.getFullYear()
      );
      this._block02DateFrom = this.getFirstDateOfWeek(
        this._weekNumber + 1,
        this._pivotDate.getFullYear()
      );
      this._block02DateTo = this.getLastDateOfWeek(
        this._weekNumber + 1,
        this._pivotDate.getFullYear()
      );
    } else {
      this._dateFrom = this.getFirstDateOfWeek(
        this._weekNumber - 1,
        this._pivotDate.getFullYear()
      );
      this._block01DateFrom = this.getFirstDateOfWeek(
        this._weekNumber - 1,
        this._pivotDate.getFullYear()
      );
      this._block01DateTo = this.getLastDateOfWeek(
        this._weekNumber - 1,
        this._pivotDate.getFullYear()
      );
      this._dateTo = this.getLastDateOfWeek(
        this._weekNumber,
        this._pivotDate.getFullYear()
      );
      this._block02DateFrom = this.getFirstDateOfWeek(
        this._weekNumber,
        this._pivotDate.getFullYear()
      );
      this._block02DateTo = this.getLastDateOfWeek(
        this._weekNumber,
        this._pivotDate.getFullYear()
      );
    }
    let day = 0;
    const dateToCopy = new Date(+this._dateFrom);
    this._doubleWeek = [];
    while ( day < 14  )
    {
      this._doubleWeek.push(new Date(+dateToCopy));
      dateToCopy.setDate(dateToCopy.getDate() + 1);
      day++;
    }
  }

  ngOnInit() {}

  public getWeekNumber(d: Date) {
    // Copy date so don't modify original
    d = new Date(+d);
    d.setHours(0, 0, 0);
    // Set to nearest Thursday: current date + 3 - current day number
    // Make Sunday's day number 1
    d.setDate(d.getDate() + 3 - d.getDay() || 1);
    // Get first day of year
    const yearStart = new Date(d.getFullYear(), 0, 1);
    const weekNo = Math.ceil(
      ((d.valueOf() - yearStart.valueOf()) / 86400000 + 1) / 7
    );
    // Return week number
    return weekNo;
  }

  public getFirstDateOfWeek(week: number, year: number) {
    const day = (week - 1) * 7;
    return new Date(year, 0, day);
  }

  public getLastDateOfWeek(week: number, year: number) {
    const day = ( 6 + (week - 1) * 7);
    return new Date(year, 0, day);
  }

  public nextBlock() {
      this._pivotDate.setDate(this._pivotDate.getDate() + 14);
      this.buildDateTables();
  }

  public prevBlock() {
    this._pivotDate.setDate(this._pivotDate.getDate() - 14);
    this.buildDateTables();
  }

}
