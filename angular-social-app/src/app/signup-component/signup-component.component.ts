import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import 'firebase/firestore'

// Service.
import { AuthService } from "./../shared/services/auth.service";
import { User } from 'firebase';

interface UserModel {
  firstname: String;
  lastname: String;
  email: String;
  password: String
}

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.scss']
})
export class SignupComponentComponent implements OnInit {
  private userDoc: AngularFirestoreDocument<UserModel>;
  public signup_form_group: FormGroup
  
  // -- //
  constructor(private authService: AuthService,  private afs: AngularFirestore, public fb: FormBuilder) {
    this.signup_form_group = this.fb.group({
      'firstname':['', [Validators.required]],
      'lastname':['', [Validators.required]],
      'email':['', [Validators.required]],
      'password':['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // this.createUser()
  }

  createUser(){
    let user:UserModel = {
      firstname:this.signup_form_group.get('firstname').value,
      lastname:this.signup_form_group.get('lastname').value,
      email:this.signup_form_group.get('email').value,
      password:this.signup_form_group.get('password').value
    }
    console.log(`User created`);
    console.log(user)
    try {
      if (user) {
        this.authService.createUser(user)
        // this.afs.collection('users').add({firstname:"Shahzaib",lastname:"Noor",email:'shahzaibnoor40@gmail.com',password:'123456'})
      }
    }
    catch {
      console.log("Invalid user data.")
    }
    return
  }
}
