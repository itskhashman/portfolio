import { TestBed } from '@angular/core/testing';

import { EnToArService } from './en-to-ar.service';

describe('EnToArService', () => {
  let service: EnToArService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnToArService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
