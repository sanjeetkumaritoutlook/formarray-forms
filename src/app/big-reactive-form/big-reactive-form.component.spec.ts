import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigReactiveFormComponent } from './big-reactive-form.component';

describe('BigReactiveFormComponent', () => {
  let component: BigReactiveFormComponent;
  let fixture: ComponentFixture<BigReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigReactiveFormComponent]
    });
    fixture = TestBed.createComponent(BigReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
