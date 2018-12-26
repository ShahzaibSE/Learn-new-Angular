import { Component, OnInit, Input } from '@angular/core';

// Servicd.
import { Ad, AdService } from './../../shared/services/ad/ad.service';

@Component({
  selector: 'app-addetail',
  templateUrl: './addetail.component.html',
  styleUrls: ['./addetail.component.css']
})
export class AddetailComponent implements OnInit {

  arr:Number[]= []
  @Input()
  Ad: Ad;
  constructor() { }

  ngOnInit() {
  }

  testFn():Number {
    return
  }

}
