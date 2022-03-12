import { TestBed } from '@angular/core/testing';

import { GetAllDealersService } from './get-all-dealers.service';

describe('GetAllDealersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllDealersService = TestBed.get(GetAllDealersService);
    expect(service).toBeTruthy();
  });
});
