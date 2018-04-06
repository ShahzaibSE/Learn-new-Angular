import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public create_and_load_component(component: {event: any, data: any}) {
    console.log('Component');
    console.log(component);
    console.log(typeof component);
    console.log(component.data);
  }

}
