import { Component, OnInit, EventEmitter } from '@angular/core';

// Servicd.
import { Ad, AdService } from './../../shared/services/ad/ad.service';

// Dummy data.
import * as data from './data.json';

@Component({
  selector: 'app-adlist',
  templateUrl: './adlist.component.html',
  styleUrls: ['./adlist.component.css']
})
export class AdlistComponent implements OnInit {

  adList: Array<Ad>;

  constructor(public adService: AdService) { 
    // console.log(data);
  }

  ngOnInit() {
    this.adList = this.adService.getAdList();
    console.log(this.adList);
  }

}