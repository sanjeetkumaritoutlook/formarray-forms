import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFieldCustomInputComponent } from './formly-field-custom-input.component';

describe('FormlyFieldCustomInputComponent', () => {
  let component: FormlyFieldCustomInputComponent;
  let fixture: ComponentFixture<FormlyFieldCustomInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyFieldCustomInputComponent]
    });
    fixture = TestBed.createComponent(FormlyFieldCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
