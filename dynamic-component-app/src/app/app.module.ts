import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdbannerDirective } from './adbanner.directive';
import { AdbannerComponent } from './adbanner/adbanner.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdbannerDirective,
    AdbannerComponent,
    HeroDetailComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
