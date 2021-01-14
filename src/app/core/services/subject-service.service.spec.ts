import { TestBed } from '@angular/core/testing';

import { SubjectServiceService } from './subject-service.service';

describe('SubjectServiceService', () => {
  let service: SubjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change value', () => {
    let value = 'FOO'
    expect(service.changeValue(value));
    expect(service.value).toEqual(value);
  });
});
