import { NetworkDirective } from './network.directive';
import { TestBed } from '@angular/core/testing';

describe('NetworkDirective', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should create an instance', () => {
    const directive: NetworkDirective = TestBed.get(NetworkDirective);
    expect(directive).toBeTruthy();
  });
});

// describe('NetworkDirective', () => {
//   it('should create an instance', () => {
//     const directive = new NetworkDirective();
//     expect(directive).toBeTruthy();
//   });
// });
