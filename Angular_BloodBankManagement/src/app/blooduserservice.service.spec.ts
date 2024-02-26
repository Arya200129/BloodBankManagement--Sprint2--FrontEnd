import { TestBed } from '@angular/core/testing';

import { BlooduserserviceService } from './blooduserservice.service';

describe('BlooduserserviceService', () => {
  let service: BlooduserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlooduserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
