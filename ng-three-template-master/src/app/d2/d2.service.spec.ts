import { TestBed } from '@angular/core/testing';

import { D2Service } from './d2.service';

describe('D2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: D2Service = TestBed.get(D2Service);
    expect(service).toBeTruthy();
  });
});
