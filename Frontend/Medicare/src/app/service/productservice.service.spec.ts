import { TestBed } from '@angular/core/testing';

import { MedicareserviceService } from './medicare.service';

describe('ProductserviceService', () => {
  let service: MedicareserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicareserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
