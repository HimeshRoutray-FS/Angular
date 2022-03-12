import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerKycComponent } from './customer-kyc.component';

describe('CustomerKycComponent', () => {
  let component: CustomerKycComponent;
  let fixture: ComponentFixture<CustomerKycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerKycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
