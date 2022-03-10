import { TestBed } from '@angular/core/testing';

import { MstService } from './mst.service';

describe('MstService', () => {
  let service: MstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
