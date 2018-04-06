import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DynamicTodoDirective } from './shared/dynamic-todo.directive';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

// Service.
import { TodoService } from './shared/services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTodoDirective,
    AddComponent,
    ListComponent,
    WorkbenchComponent, NavbarComponent, SidemenuComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents : [AddComponent, ListComponent],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
