import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery17',
  templateUrl: './gallery17.component.html',
  styleUrls: ['./gallery17.component.scss']
})
export class Gallery17Component implements OnInit {
  @ViewChild('space', { static: false})
  container: ElementRef<HTMLElement>;

  public url = 'src/assets/images/astronaut-helmet.jpg';

  constructor(
    private matDialogRef: MatDialogRef<Gallery17Component>,
    @Inject(MAT_DIALOG_DATA) data
  ) { }

  ngOnInit() {}

  closeDialog() {
    this.matDialogRef.close();
  }

}
