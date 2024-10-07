import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTypedFormComponent } from './my-typed-form.component';

describe('MyTypedFormComponent', () => {
  let component: MyTypedFormComponent;
  let fixture: ComponentFixture<MyTypedFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTypedFormComponent]
    });
    fixture = TestBed.createComponent(MyTypedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
