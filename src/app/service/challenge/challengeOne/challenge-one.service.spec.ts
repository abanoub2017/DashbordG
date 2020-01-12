import { TestBed } from '@angular/core/testing';

import { ChallengeOneService } from './challenge-one.service';

describe('ChallengeOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChallengeOneService = TestBed.get(ChallengeOneService);
    expect(service).toBeTruthy();
  });
});
