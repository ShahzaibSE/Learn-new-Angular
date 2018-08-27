import { Injectable } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

// User Module.
import { UserModule } from './../../../user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  signIn(email: HTMLInputElement, password: HTMLInputElement) {
    localStorage.setItem('userSession',JSON.stringify({email:email.value, password:password.value}));
  }
}
