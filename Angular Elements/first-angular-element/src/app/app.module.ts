import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Modules.
import { PopupModule } from './popup/popup.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
  }
}
