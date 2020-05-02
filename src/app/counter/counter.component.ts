import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { backgroundimgLocation, foregroundimgLocation, midgroundimgLocation } from './../label.constants';
import { Observable, Observer } from 'rxjs';
import { share } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Output() moveUpFromCounter = new EventEmitter();
  @Output() moveDownFromCounter = new EventEmitter();
  public today: Date;
  public birthdate: Date;
  public firstmeetDate: Date;
  public javaYuvaDate: Date;

  @ViewChild('beginning', { static: false })
  beginning: ElementRef;

  // @ViewChild('spanText1', { static: false })
  public spanText1: ElementRef;

  // @ViewChild('spanText2', { static: false })
  public spanText2: ElementRef;

  // @ViewChild('spanText3', { static: false })
  public spanText3: ElementRef;

  @ViewChild('spanText1', { static : false }) set content1(content: ElementRef) {
    if ( content) { // initially setter gets called with undefined
        this.spanText1 = content;
    }
  }

  @ViewChild('spanText2', { static : false }) set content2(content: ElementRef) {
    if ( content) { // initially setter gets called with undefined
        this.spanText1 = content;
    }
  }

  @ViewChild('spanText3', { static : false }) set content3(content: ElementRef) {
    if ( content) { // initially setter gets called with undefined
        this.spanText1 = content;
    }
  }

  public number;
  public duration;
  public birthdays;
  public meetdays;
  public javadays;
  public backupCounter: Array<number> = [];
  public inView = false;
  public speed = 50;
  // public fights = Math.pow(10, 1000);
  public fights = 2000;
  public firstSentence = 'Days since you were born';
  public secondSentence = 'Days since we met';
  public thirdSentence = 'Days since you became JavaYuva';
  public i = 0;
  public j = 0;
  public k = 0;
  constructor() {
  }

  ngOnInit() {
    this.today = new Date();
    this.birthdate = new Date('03/05/1999');
    this.firstmeetDate = new Date('01/08/2016');
    this.javaYuvaDate = new Date('03/07/2017');
    this.birthdays = (this.today.getTime() - this.birthdate.getTime() ) / (1000 * 3600 * 24) ;
    this.meetdays = (this.today.getTime() - this.firstmeetDate.getTime() ) / (1000 * 3600 * 24) ;
    this.javadays = (this.today.getTime() - this.javaYuvaDate.getTime() ) / (1000 * 3600 * 24) ;
    if (this.backupCounter.length === 0 ) {
      this.backupCounter.push(this.birthdays);
      this.backupCounter.push(this.meetdays);
      this.backupCounter.push(this.javadays);
    }
  }

  // typeWriter(spanText: ElementRef, n: number) {
  //   switch (n) {
  //     case 1:
  //       if (this.i < this.firstSentence.length) {
  //         spanText.nativeElement.innerHTML += this.firstSentence[this.i];
  //         this.i = this.i + 1;
  //         setTimeout(() => {this.typeWriter(spanText, n); }, this.speed);
  //       }
  //       break;
  //     case 2:
  //       if (this.j < this.secondSentence.length) {
  //         spanText.nativeElement.innerHTML += this.secondSentence[this.j];
  //         this.j = this.j + 1;
  //         setTimeout(() => {this.typeWriter(spanText, n); }, this.speed);
  //       }
  //       break;
  //     case 3:
  //       if (this.k < this.thirdSentence.length) {
  //         spanText.nativeElement.innerHTML += this.thirdSentence[this.k];
  //         this.k = this.k + 1;
  //         setTimeout(() => {this.typeWriter(spanText, n); }, this.speed);
  //       }
  //       break;
  //   }
  // }

  centerView() {
    this.inView = true;
    console.log('In Counter Component');
    this.duration = 1000;
    this.number = 0;
    this.birthdays = 0;
    this.meetdays = 0;
    this.javadays = 0;
    this.fights = 0;
    setTimeout(() => {
      this.number = 2000;
      this.duration = 2000;
      this.birthdays = this.backupCounter[0];
      this.meetdays = this.backupCounter[1];
      this.javadays = this.backupCounter[2];
      this.fights = 2000;
    }, 1000);
    // this.number = 2000;
    this.beginning.nativeElement.scrollIntoView({behavior: "smooth"});
  }

  public scrollDown() {
    this.inView = false;
    this.moveDownFromCounter.emit();
  }

  public scrollUp() {
    this.inView = false;
    this.moveUpFromCounter.emit();
  }

}
