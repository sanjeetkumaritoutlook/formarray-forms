import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-custom-input',
  // templateUrl: './formly-field-custom-input.component.html',
  template: ` <input [type]="type" [formControl]="formControl" [formlyAttributes]="field" /> `,
  styleUrls: ['./formly-field-custom-input.component.scss']
})
export class FormlyFieldCustomInputComponent   extends FieldType<FieldTypeConfig> {
  get type() {
    return this.props.type || 'text';
  }
}
