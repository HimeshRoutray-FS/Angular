import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReportComponent } from './get-report.component';

describe('ReportComponent', () => {
  let component: GetReportComponent;
  let fixture: ComponentFixture<GetReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
