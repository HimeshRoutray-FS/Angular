import { TestBed } from '@angular/core/testing';

import { CreateDealerService } from './create-dealer.service';

describe('CreateDealerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateDealerService = TestBed.get(CreateDealerService);
    expect(service).toBeTruthy();
  });
});
