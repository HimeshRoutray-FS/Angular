import { TestBed } from '@angular/core/testing';

import { CustomerKycService } from './customer-kyc.service';

describe('CustomerKycService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerKycService = TestBed.get(CustomerKycService);
    expect(service).toBeTruthy();
  });
});
