import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomPipPipe } from './shared/pipes/custom-pip.pipe';
import { DemoPipeComponent } from './demo/demo-pipe/demo-pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomPipPipe,
    DemoPipeComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
