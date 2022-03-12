import { TestBed } from '@angular/core/testing';

import { OnlyLoggedInDealersGuardService } from './only-logged-in-dealers-guard.service';

describe('OnlyLoggedInDealersGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlyLoggedInDealersGuardService = TestBed.get(OnlyLoggedInDealersGuardService);
    expect(service).toBeTruthy();
  });
});
