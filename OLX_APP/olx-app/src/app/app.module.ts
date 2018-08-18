import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// User module.
import { UserModule } from './user/user.module';
import { AdlistComponent } from './adlist/adlist.component';
import { AddetailComponent } from './addetail/addetail.component';


@NgModule({
  declarations: [
    AppComponent,
    AdlistComponent,
    AddetailComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
