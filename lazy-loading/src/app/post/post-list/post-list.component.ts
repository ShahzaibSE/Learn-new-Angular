import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  post_list = [
    "Batman", "Superman", "Jurrasic World", "Avengers Infinity War"
  ];

  constructor() { }

  ngOnInit() {
  }

}
