import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPaginationComponent } from './rxjs-pagination.component';

describe('RxjsPaginationComponent', () => {
  let component: RxjsPaginationComponent;
  let fixture: ComponentFixture<RxjsPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RxjsPaginationComponent]
    });
    fixture = TestBed.createComponent(RxjsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
