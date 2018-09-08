import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdlistComponent } from './adlist/adlist.component';
import { AddetailComponent } from './addetail/addetail.component';

// Material Module
import { MaterialModule } from './../material/material.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdlistComponent, AddetailComponent]
})
export class AdModule { }
