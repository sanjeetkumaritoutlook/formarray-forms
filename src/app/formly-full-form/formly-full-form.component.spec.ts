import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFullFormComponent } from './formly-full-form.component';

describe('FormlyFullFormComponent', () => {
  let component: FormlyFullFormComponent;
  let fixture: ComponentFixture<FormlyFullFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyFullFormComponent]
    });
    fixture = TestBed.createComponent(FormlyFullFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
