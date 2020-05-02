import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-magicalname',
  templateUrl: './magicalname.component.html',
  styleUrls: ['./magicalname.component.scss']
})
export class MagicalnameComponent implements OnInit {

  @Output() moveUpFromMagicalName = new EventEmitter();

  @ViewChild('beginning', { static: false})
  beginning: ElementRef;

  public animArray = [false, false, false, false, false];
  public startAnim = false;
  constructor() {}

  ngOnInit() { }

  centerView() {
    console.log('In Counter Component');
    this.beginning.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  startAnimation() {
    this.startAnim = true;
    this.animArray[0] = true;
    setTimeout(() => { this.animArray[1] = true; }, 3000);
    setTimeout(() => { this.animArray[2] = true; }, 6000);
    setTimeout(() => { this.animArray[3] = true; }, 9000);
    setTimeout(() => { this.animArray[4] = true; }, 15000);
  }

  public scrollUp() {
    this.moveUpFromMagicalName.emit();
  }

}
