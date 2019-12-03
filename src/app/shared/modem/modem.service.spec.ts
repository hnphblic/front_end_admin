import { TestBed } from '@angular/core/testing';

import { ModemService } from './modem.service';

describe('ModemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModemService = TestBed.get(ModemService);
    expect(service).toBeTruthy();
  });
});
