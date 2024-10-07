import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-formly-full-form',
  templateUrl: './formly-full-form.component.html',
  styleUrls: ['./formly-full-form.component.scss']
})
export class FormlyFullFormComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        required: true,
      },
    },
    {
      key: 'Input',
      type: 'input',
      props: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        required: true,
        type: 'email',
      },
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        label: 'Age',
        required: true,
        type: 'number',
      },
    },

    {
      key: 'text',
      type: 'input',
      props: {
        label: 'Text',
        placeholder: 'Formly is terrific!',
        required: true,
      },
    },
    {
      key: 'Radio',
      type: 'radio',
      props: {
        label: 'Radio',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
    {
      key: 'rating',
      type: 'custom',
      templateOptions: {
        label: 'Rating',
        max: 5,
      },
    },
    {
      key: 'toggle-checkbox',
      type: 'checkbox',
      props: { label: 'checkbox select' },
      validation: {
        messages: {
          pattern: 'Please accept the terms',
        },
      },
    },

    {
      key: 'whyNot',
      type: 'textarea',
      props: {
        label: 'Why Not?',
        placeholder: 'Type in here... I dare you',
      },
    },
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model)); // Handle form submission
    }
  }

}
