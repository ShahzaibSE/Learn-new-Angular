import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdRoutesRoutingModule } from './ad-routes-routing.module';
import { AdnavComponent } from './adnav/adnav.component';

@NgModule({
  imports: [
    CommonModule,
    AdRoutesRoutingModule
  ],
  declarations: [AdnavComponent]
})
export class AdRoutesModule { }
