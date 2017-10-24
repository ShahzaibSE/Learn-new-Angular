import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdbanner]'
})
export class AdbannerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
