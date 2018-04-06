import { Component, OnInit } from '@angular/core';
import { TodoService } from './../shared/services/todo.service';

// Custom Components.
import { AddComponent } from './../add/add.component';
import { ListComponent } from './../list/list.component';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.css']
})
export class WorkbenchComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}
