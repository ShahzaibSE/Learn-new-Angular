import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-parameterized-router',
  templateUrl: './parameterized-router.component.html',
  styleUrls: ['./parameterized-router.component.css']
})
export class ParameterizedRouterComponent implements OnInit {

  id: string;
  constructor(route: ActivatedRoute) {
    route.params.subscribe(param => this.id = param['Id']);
    console.log(`Id from param: ${this.id}`);
  }

  ngOnInit() {
    // this.routeParams.snapshot('Id')
  }

}
