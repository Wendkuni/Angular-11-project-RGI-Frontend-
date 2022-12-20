/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthMairieService } from './authMairie.service';

describe('Service: AuthMairie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthMairieService]
    });
  });

  it('should ...', inject([AuthMairieService], (service: AuthMairieService) => {
    expect(service).toBeTruthy();
  }));
});
