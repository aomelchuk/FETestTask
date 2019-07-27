import { TestBed } from '@angular/core/testing';

import { UpdateIncludesService } from './update-includes.service.ts';

describe('UpdateIncludesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateIncludesService = TestBed.get(UpdateIncludesService);
    expect(service).toBeTruthy();
  });
});
