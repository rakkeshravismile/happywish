import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Gallery16Component } from '../gallery16/gallery16.component';
import { Gallery17Component } from '../gallery17/gallery17.component';
import { Gallery18Component } from '../gallery18/gallery18.component';
import { Gallery19to20Component } from '../gallery19to20/gallery19to20.component';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Output() moveUpFromCalendar = new EventEmitter();
  @Output() moveDownFromCalendar = new EventEmitter();

  @ViewChild('beginning', { static: false })
  beginning: ElementRef;

  public dialogConfig: { [key: string]: any };

  constructor(
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.dialogConfig = {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw'
    };
  }

  arrayOne(n: number) {
    return Array(n);
  }

  centerView() {
    console.log('In Counter Component');
    this.beginning.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  openGallery(n: number) {
    if ( n === 16 ) {
      this.dialog.open(Gallery16Component, this.dialogConfig );
    } else if ( n === 17 ) {
      this.dialog.open(Gallery17Component, this.dialogConfig);
    } else if ( n === 18 ) {
      this.dialog.open(Gallery18Component, this.dialogConfig );
    } else if ( n === 19 ) {
      this.dialog.open(Gallery19to20Component, this.dialogConfig);
    }
  }

  public scrollDown() {
    this.moveDownFromCalendar.emit();
  }

  public scrollUp() {
    this.moveUpFromCalendar.emit();
  }

}
