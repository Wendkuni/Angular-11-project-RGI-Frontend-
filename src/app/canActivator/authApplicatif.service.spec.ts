/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthApplicatifService } from './authApplicatif.service';

describe('Service: AuthApplicatif', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthApplicatifService]
    });
  });

  it('should ...', inject([AuthApplicatifService], (service: AuthApplicatifService) => {
    expect(service).toBeTruthy();
  }));
});
