import { Component,OnInit,ViewChild } from '@angular/core';
import {MatStepperModule,  MatStep} from '@angular/material/stepper';

import {MatStepperHarness} from '@angular/material/stepper/testing';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-big-reactive-form',
  templateUrl: './big-reactive-form.component.html',
  styleUrls: ['./big-reactive-form.component.scss']
})
export class BigReactiveFormComponent implements OnInit {
 // @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  form:FormGroup

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form=this._formBuilder.group({
       form1: this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    }),
       form2:this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
    })
  }

  submit(){
    
  }
}
