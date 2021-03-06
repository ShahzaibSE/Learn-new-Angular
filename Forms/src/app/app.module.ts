import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormControlComponent } from './form-control/form-control.component';

// Material
import { MdInputModule, MdCardModule, MdInputDirective, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataSource, CdkTableModule } from '@angular/cdk';
import { FormgroupComponent } from './formgroup/formgroup.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    FormgroupComponent,
    FormbuilderComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    MdInputModule, MdCardModule, NoopAnimationsModule,
    MdButtonModule, MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
