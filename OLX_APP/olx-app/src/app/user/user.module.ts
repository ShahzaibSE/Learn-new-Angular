import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import {MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatFormFieldModule
        } from '@angular/material';

// Components.
import {UserComponent} from './user.component';

// Service.
import { UserService } from './../shared/services/user/user.service';

@NgModule({
  imports: [
    CommonModule,MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule
  ],
  declarations: [UserComponent],
  exports:[UserComponent]
})
export class UserModule { }
