import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {
  private todo_control_group: FormGroup

  constructor(private fb: FormBuilder) { 
    this.todo_control_group = this.fb.group({
      // -- controls -- //
      todo_title : new FormControl('',[]),
      todo_desc: new FormControl('',[]),
      todo_date: new FormControl('', [])
    })
  }

  ngOnInit() {
  }

}