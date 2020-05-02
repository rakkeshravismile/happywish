import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @ViewChild('beginning', { static: false })
  beginning: ElementRef;

  @Output() moveDown = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public scrollDown() {
    this.moveDown.emit();
  }

  centerView() {
    console.log('In Intro Component');
    this.beginning.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

}
