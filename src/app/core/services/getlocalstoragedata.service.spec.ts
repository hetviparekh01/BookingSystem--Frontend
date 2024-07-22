import { TestBed } from '@angular/core/testing';

import { GetlocalstoragedataService } from './getlocalstoragedata.service';

describe('GetlocalstoragedataService', () => {
  let service: GetlocalstoragedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetlocalstoragedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
