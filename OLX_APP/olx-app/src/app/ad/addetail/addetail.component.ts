import { Component, OnInit, Input } from '@angular/core';

interface AdDetail {
  name: string;
  category: string;
  createdAt: Date;
}

@Component({
  selector: 'app-addetail',
  templateUrl: './addetail.component.html',
  styleUrls: ['./addetail.component.css']
})
export class AddetailComponent implements OnInit {

  arr:Number[]= []
  constructor() { }

  ngOnInit() {
  }

  testFn():Number {
    return
  }

}
