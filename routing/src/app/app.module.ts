import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//Routes
import { routes } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { ParameterizedRouterComponent } from './parameterized-router/parameterized-router.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    ParameterizedRouterComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  // providers: [{provide:APP_BASE_HREF,useValue:'/'}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
