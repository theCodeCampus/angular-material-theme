import { Component } from '@angular/core';
import {MdDialog} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './../style/angular-material-theme.scss'
  ]
})
export class AppComponent {
  constructor(private dialog: MdDialog) {

  }

  openDialog() {
    this.dialog.open(DialogComponent)
  }
}
