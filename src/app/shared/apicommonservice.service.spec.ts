import { TestBed } from '@angular/core/testing';

import { ApicommonserviceService } from './apicommonservice.service';

describe('ApicommonserviceService', () => {
  let service: ApicommonserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicommonserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
