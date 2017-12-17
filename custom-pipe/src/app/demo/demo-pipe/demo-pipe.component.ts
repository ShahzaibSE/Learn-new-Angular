import { Component, OnInit } from '@angular/core';

const data = [
        { id : 1, name: "Shahzaib", sequence: 2 },
        { id : 2, name: "Shaheen", sequence: 1 },
        { id : 3, name: "Ken", sequence: 3 },
        { id : 4, name: "Kenny", sequence: 5 },
        { id : 5, name: "Shane", sequence: 4 },
        { id : 6, name: "John", sequence: 6 },
        { id : 7, name: "Eoin", sequence: 7 },
        { id : 8, name: "Sara", sequence: 8 }
];

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent implements OnInit {
  value: any;
  data: Array<any>;

  constructor() { }

  ngOnInit() {
    console.log('Dummy data');
    this.data = data;
    // console.log(this.value);
  }

}
