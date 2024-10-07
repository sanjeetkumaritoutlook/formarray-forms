import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsPaginationComponent } from './signals-pagination.component';

describe('SignalsPaginationComponent', () => {
  let component: SignalsPaginationComponent;
  let fixture: ComponentFixture<SignalsPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalsPaginationComponent]
    });
    fixture = TestBed.createComponent(SignalsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
