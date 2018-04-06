import { Injectable, ComponentFactoryResolver, ViewContainerRef, Component, Type } from '@angular/core';
import { ToDoModel } from './../models/todo.model';

@Injectable()
export class TodoService {

  constructor(public componentFactoryResolver: ComponentFactoryResolver, public viewContainerRef: ViewContainerRef) { }

  
  loadComponent(ToDo: ToDoModel, viewContainerRef: ViewContainerRef = this.viewContainerRef) {
    let componentFactory = this.componentFactoryResolver
                          .resolveComponentFactory(ToDo.component);
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    let Todo: ToDoModel = <ToDoModel>componentRef.instance;
    Todo.data = Todo.data;
  }

}
