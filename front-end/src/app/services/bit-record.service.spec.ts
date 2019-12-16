import { TestBed } from '@angular/core/testing';

import { BitRecordService } from './bit-record.service';

describe('BitRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitRecordService = TestBed.get(BitRecordService);
    expect(service).toBeTruthy();
  });
});
