import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-form2',
  template:`
  <div [formGroup]="formGroup">
  <mat-form-field>
        <input matInput placeholder="Address" formControlName="secondCtrl" required>
      </mat-form-field>
      </div>
  `,
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  @Input() formGroup:FormGroup
}
