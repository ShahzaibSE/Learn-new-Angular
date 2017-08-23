import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MdInputContainer } from '@angular/material';


@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  // formControl: FormControl;

  constructor() {
    // console.log(`Our first control value: ${this.formControl.value}`);
  }

  ngOnInit() {
  }

  onSubmit(control) {
    console.log(control);
    console.log('Form submitted data');
    console.log(control.sku);
    // debugger;
  }

}
