import { TestBed } from '@angular/core/testing';

import { DetailUserService } from './detail-user.service';

describe('DetailUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailUserService = TestBed.get(DetailUserService);
    expect(service).toBeTruthy();
  });
});
