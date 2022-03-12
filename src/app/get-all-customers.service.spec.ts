import { TestBed } from '@angular/core/testing';

import { GetAllCustomersService } from './get-all-customers.service';

describe('GetAllCustomersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllCustomersService = TestBed.get(GetAllCustomersService);
    expect(service).toBeTruthy();
  });
});
