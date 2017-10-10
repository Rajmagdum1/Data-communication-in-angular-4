import { Component } from '@angular/core';
// We will need to import a couple of specific API’s for dealing with reactive forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css']
})
export class AppContentComponent {
  // The FormGroup object as you may remember from the simple 
  // form example exposes various API’s for dealing with forms. Here we are creating a new object and setting its type to FormGroup

  reactiveForm: FormGroup;
   mobileNumberInput = document.querySelector('[name=lastName]');

  constructor(fb: FormBuilder) {
    // Here we are using the FormBuilder to build out our form.
    this.reactiveForm = fb.group({
      // We can set default values by passing in the corresponding value or 
      // leave blank if we wish to not set the value. For our example, 
      // we’ll default the gender to female.

      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'mobileNumber': [null, Validators.required]
    })
  }
  // finction to update the mobile number in the us format

  mobilenumberFilterInUsFormatc = function () {

    if (this.mobileNumberInput.nodeValue = null) {
      return;
    } else {

    }
  }
  // mobilenumberFilterInUsFormatc();

  // submit the form 
  // Again we’ll implement our form submit function that will just console.log the results of our form
  submitForm(value: any): void {
    console.log('hi');
    console.log('Reactive Form Data: ')
    console.log(value);
  }
  // event listeners
 

}
