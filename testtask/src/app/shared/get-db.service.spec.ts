import { TestBed } from '@angular/core/testing';

import { GetDbService } from './get-db.service.ts';

describe('GetDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDbService = TestBed.get(GetDbService);
    expect(service).toBeTruthy();
  });
});
