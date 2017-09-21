import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';

// Login Component
import { LoginComponent } from './login/login.component';

// Auth Service
import { AuthService } from './auth.service';

import { MdButtonModule, MdCheckboxModule, MdSelectModule, MdInputModule, MdCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
   BrowserAnimationsModule, NoopAnimationsModule,
   MdButtonModule, MdCheckboxModule, MdSelectModule, MdInputModule, MdCardModule,
   AuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
