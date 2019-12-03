import { TestBed } from '@angular/core/testing';

import { TranslateCustomService } from './translate-custom.service';

describe('TranslateCustomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateCustomService = TestBed.get(TranslateCustomService);
    expect(service).toBeTruthy();
  });
});
