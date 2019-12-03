import { TestBed } from '@angular/core/testing';

import { HistoryOperatorService } from './history-operator.service';

describe('HistoryAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoryOperatorService = TestBed.get(HistoryOperatorService);
    expect(service).toBeTruthy();
  });
});
