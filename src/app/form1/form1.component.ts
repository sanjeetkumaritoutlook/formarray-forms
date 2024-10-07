import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-form1',
  template:`
  <div [formGroup]="formGroup">
  <mat-form-field>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      </div>
  `,
})
export class Form1Component {
  @Input() formGroup:FormGroup

}
