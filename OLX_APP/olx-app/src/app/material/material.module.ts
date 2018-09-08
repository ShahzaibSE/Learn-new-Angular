import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,
        MatCardModule,MatInputModule,MatAutocompleteModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule,
    MatAutocompleteModule
  ],
  declarations: []
})
export class MaterialModule { }
