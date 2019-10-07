import { TestBed } from '@angular/core/testing';

import { GetThreadService } from './get-thread.service';

describe('GetThreadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetThreadService = TestBed.get(GetThreadService);
    expect(service).toBeTruthy();
  });
});
