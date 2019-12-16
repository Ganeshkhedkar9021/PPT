import { TestBed } from '@angular/core/testing';

import { OldRecordService } from './old-record.service';

describe('OldRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OldRecordService = TestBed.get(OldRecordService);
    expect(service).toBeTruthy();
  });
});
