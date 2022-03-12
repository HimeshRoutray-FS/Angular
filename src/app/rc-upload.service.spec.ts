import { TestBed } from '@angular/core/testing';

import { RcUploadService } from './rc-upload.service';

describe('RcUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RcUploadService = TestBed.get(RcUploadService);
    expect(service).toBeTruthy();
  });
});
