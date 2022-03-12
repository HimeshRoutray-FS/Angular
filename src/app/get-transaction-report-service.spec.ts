import { TestBed } from '@angular/core/testing';

import { GetTransactionReportService } from './get-transaction-report-service';

describe('GetTransactionReportServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTransactionReportService = TestBed.get(GetTransactionReportService);
    expect(service).toBeTruthy();
  });
});
