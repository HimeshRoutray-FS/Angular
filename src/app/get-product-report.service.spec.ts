import { TestBed } from '@angular/core/testing';

import { GetProductReportService } from './get-product-report.service';

describe('GetProductReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProductReportService = TestBed.get(GetProductReportService);
    expect(service).toBeTruthy();
  });
});
