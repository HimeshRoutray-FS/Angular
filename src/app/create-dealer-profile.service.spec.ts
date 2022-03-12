import { TestBed } from '@angular/core/testing';

import { CreateDealerProfileService } from './create-dealer-profile.service';

describe('CreateDealerProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateDealerProfileService = TestBed.get(CreateDealerProfileService);
    expect(service).toBeTruthy();
  });
});
