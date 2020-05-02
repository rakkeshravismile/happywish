import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery19to20',
  templateUrl: './gallery19to20.component.html',
  styleUrls: ['./gallery19to20.component.scss']
})
export class Gallery19to20Component implements OnInit {

  constructor(private dialogRef: MatDialogRef<Gallery19to20Component>) { }

  ngOnInit() {
  }

  public closeDialog() {
    this.dialogRef.close();
  }

}
