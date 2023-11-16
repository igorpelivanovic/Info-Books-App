import { TestBed } from '@angular/core/testing';

import { FilterBoxService } from './filter-box.service';

describe('FilterBoxService', () => {
  let service: FilterBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
