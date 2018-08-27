import { Component, OnInit } from '@angular/core';

// Service.
import { UserService } from './../shared/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
