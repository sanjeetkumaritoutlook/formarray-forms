import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFormExampleComponent } from './formly-form-example.component';

describe('FormlyFormExampleComponent', () => {
  let component: FormlyFormExampleComponent;
  let fixture: ComponentFixture<FormlyFormExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyFormExampleComponent]
    });
    fixture = TestBed.createComponent(FormlyFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
