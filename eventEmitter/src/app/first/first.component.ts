import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  data = 'Event emitter Implementation';
  payload: any;

  constructor() { }

  ngOnInit() {
  }

  doSomething(data) {
    // console.log(`Parent Data : ${this.data}`);
    this.payload = data;
    console.log(this.payload);
  }

}
