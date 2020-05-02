import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery18',
  templateUrl: './gallery18.component.html',
  styleUrls: ['./gallery18.component.scss']
})
export class Gallery18Component implements OnInit {

  constructor(private dialogRef: MatDialogRef<Gallery18Component>) { }

  ngOnInit() {
  }

  public closeDialog() {
    this.dialogRef.close();
  }

}
