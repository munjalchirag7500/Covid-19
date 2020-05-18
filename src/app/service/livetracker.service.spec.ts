import { TestBed } from '@angular/core/testing';

import { LivetrackerService } from './livetracker.service';

describe('LivetrackerService', () => {
  let service: LivetrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivetrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
