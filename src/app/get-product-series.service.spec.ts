import { TestBed } from '@angular/core/testing';

import { GetProductSeriesService } from './get-product-series.service';

describe('GetProductSeriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProductSeriesService = TestBed.get(GetProductSeriesService);
    expect(service).toBeTruthy();
  });
});
