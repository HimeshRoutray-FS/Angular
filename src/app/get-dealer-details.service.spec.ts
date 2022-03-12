import { TestBed } from '@angular/core/testing';

import { GetDealerDetailsService } from './get-dealer-details.service';

describe('GetDealerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDealerDetailsService = TestBed.get(GetDealerDetailsService);
    expect(service).toBeTruthy();
  });
});
