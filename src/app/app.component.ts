import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { createNgModule } from '@angular/compiler/src/core';
import { CalendarComponent } from './calendar/calendar.component';
import { MagicalnameComponent } from './magicalname/magicalname.component';
import { IntroComponent } from './intro/intro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Birthday';

  // counterReload = false;
  @ViewChild('intro', { static: false })
  introComponent: IntroComponent;

  @ViewChild('counter', { static: false })
  counterComponent: CounterComponent;

  @ViewChild('calendar', { static: false })
  calendarComponent: CalendarComponent;

  @ViewChild('magicalname', { static: false })
  magicalnameComponent: MagicalnameComponent;

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event) {
  //   console.log('Scrolled');
  // }

  
  public scrollDown() {
    console.log('Scroll down clicked');
    this.counterComponent.centerView();
  }

  public scrollDownFromCounter() {
    console.log('Scroll Down from counter clicked');
    this.calendarComponent.centerView();
  }

  public scrollUpFromCounter() {
    console.log('Scroll Down from counter clicked');
    this.introComponent.centerView();
  }

  public scrollDownFromCalendar() {
    console.log('Scroll down from calendar clicked');
    this.magicalnameComponent.centerView();
  }

  public scrollUpFromCalendar() {
    console.log('Scroll down from calendar clicked');
    this.counterComponent.centerView();
  }

  public scrollUpFromMagicalName() {
    console.log('Scroll down from calendar clicked');
    this.calendarComponent.centerView();
  }

}
