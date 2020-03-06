import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Profile from './profile';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  profiles: any = null;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.profiles = [...Profile];
  }

  openModel(id) {
    const profRef = this.dialog.open(AboutDialogComponent, {
      width: '80wh',
      data: this.profiles[id]
    });
  }

}

@Component({
  selector: 'app-about-dialog',
  templateUrl: './about-dialog.html',
})
export class AboutDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AboutDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(this.data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
