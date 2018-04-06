import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicTodo]'
})
export class DynamicTodoDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
