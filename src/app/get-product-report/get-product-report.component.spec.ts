import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductReportComponent } from './get-product-report.component';

describe('GetProductReportComponent', () => {
  let component: GetProductReportComponent;
  let fixture: ComponentFixture<GetProductReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetProductReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
