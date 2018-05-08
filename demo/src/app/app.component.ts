import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    // './../style/angular-material-theme.scss'
  ]
})
export class AppComponent {
  constructor(private dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(DialogComponent)
  }
}
