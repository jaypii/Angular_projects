import { TestBed } from '@angular/core/testing';

import { Nwn2charService } from './nwn2char.service';

describe('Nwn2charService', () => {
  let service: Nwn2charService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nwn2charService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
