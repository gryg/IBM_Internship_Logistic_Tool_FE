import { TestBed } from '@angular/core/testing';

import { StudentsDataGradingService } from './students-data-grading.service';

describe('StudentsDataGradingService', () => {
  let service: StudentsDataGradingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsDataGradingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
