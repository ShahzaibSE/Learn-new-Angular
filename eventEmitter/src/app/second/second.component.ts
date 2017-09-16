import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public addData(data) {
    // console.log(`Data from parent component : ${data}`);
    this.open.emit(data);
  }

}
