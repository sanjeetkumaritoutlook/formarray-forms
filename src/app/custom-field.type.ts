import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom-input',
  template: `  
  <div class="star-rating">
  <ng-container *ngFor="let _ of range">
    <span class="star" [class.full]="model >= _ + 1" (click)="onRate(_ + 1)"></span>
  </ng-container>
</div> 
`,
  styles: [
    `
    .star-rating {
      display: inline-block;
    }
    .star {
      cursor: pointer;
      width: 20px;
      height: 20px;
      background-color: red;
      display: inline-block;
    }
    .star.full {
      background-color: yellow;
    }
  `,
  ],
})
export class CustomFieldComponent extends FieldType<FieldTypeConfig> {
  range: number[] = [];

  ngOnInit() {
    this.range = Array(this.to.max)
      .fill(0)
      .map((_, i) => i);
  }

  onRate(value: number) {
    this.formControl.setValue(value);
  }
}
