import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery16',
  templateUrl: './gallery16.component.html',
  styleUrls: ['./gallery16.component.scss']
})
export class Gallery16Component implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<Gallery16Component>,
    @Inject(MAT_DIALOG_DATA) data ) { }

  ngOnInit() {
  }

  public closeDialog() {
    this.dialogRef.close();
  }

}
