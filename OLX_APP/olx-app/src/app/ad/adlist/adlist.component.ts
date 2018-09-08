import { Component, OnInit, EventEmitter } from '@angular/core';

// Dummy data.
import * as data from './data.json';

@Component({
  selector: 'app-adlist',
  templateUrl: './adlist.component.html',
  styleUrls: ['./adlist.component.css']
})
export class AdlistComponent implements OnInit {

  constructor() { 
    console.log(data);
  }

  ngOnInit() {
  }

}
