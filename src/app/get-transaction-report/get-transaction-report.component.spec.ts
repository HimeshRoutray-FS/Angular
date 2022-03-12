import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTransactionReportComponent } from './get-transaction-report.component';

describe('GetTransactionReportComponent', () => {
  let component: GetTransactionReportComponent;
  let fixture: ComponentFixture<GetTransactionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTransactionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTransactionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
