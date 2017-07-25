import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MdButtonModule, MdDialogModule, MdToolbarModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MdButtonModule,
    MdToolbarModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
