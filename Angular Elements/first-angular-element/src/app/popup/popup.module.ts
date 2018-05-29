import { NgModule, Injector, OnInit, } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PopupComponent],
  entryComponents:[PopupComponent]
})
export class PopupModule { 
  constructor(public injector: Injector) {

  }

  ngDoBootStrap() {
    const  el = createCustomElement(PopupComponent, { injector: this.injector });

    customElements.define('app-popup', el);
  }
}
