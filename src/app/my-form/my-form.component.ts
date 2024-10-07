import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  // templateUrl: './my-form.component.html',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <label>
        Name:
        <input type="text" formControlName="name">
      </label>
      <!--formControlName directive is used in the template to bind the form controls to the corresponding input fields.-->

      <label>
        Email:
        <input type="email" formControlName="email">
      </label>
      
      <button type="submit">Submit</button>
    </form>
  `,
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {
  myForm: FormGroup; //define a myForm property of type FormGroup that represents the entire form. 

  //strictly typed form
  //By default, Angular's template-driven forms and reactive forms are not strictly typed.
  //form control and form data
  //libraries like @angular/forms-typed or ngx-strongly-typed-forms. 
  //npm i ngx-forms-typed
  //use the formBuilder service to create the form and its controls.
  constructor(private formBuilder: FormBuilder) {
    //Each form control is defined with an initial value and an optional array of validators.
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  
  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value); // Form data
    }
  }
}
