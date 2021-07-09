import { TestBed } from '@angular/core/testing';

import { ToListService } from './to-list.service';

describe('ToListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToListService = TestBed.get(ToListService);
    expect(service).toBeTruthy();
  });
});
