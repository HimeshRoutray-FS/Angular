import { TestBed } from '@angular/core/testing';

import { GetDealerProfilesService } from './get-dealer-profiles.service';

describe('GetDealerProfilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDealerProfilesService = TestBed.get(GetDealerProfilesService);
    expect(service).toBeTruthy();
  });
});
