import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


// Service.
import { UserService } from './../shared/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  router: Router;
  formgroup: FormGroup;

  constructor(public userService: UserService) { }

  ngOnInit() { 
    this.formgroup  = new FormGroup({
        email : new FormControl('', Validators.required),
        password : new FormControl('', Validators.required)}
      );
   this.formgroup.get('email').setValue("shahzaibnoor40@gmail.com");   
  }

  signIn(email: HTMLInputElement, password: HTMLInputElement) {
    let userCreds = this.userService.signIn(email, password);
    if (userCreds) {
      this.router.navigate(['/addetail']).then(result => {
        if (result) {
          console.log("Navigation successful");
        } else {
          console.log("Route not found");
        }
      })
    }else {

    }
  }

}
