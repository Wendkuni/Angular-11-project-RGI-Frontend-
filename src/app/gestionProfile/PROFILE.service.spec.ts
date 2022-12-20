/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PROFILEService } from './PROFILE.service';

describe('Service: PROFILE', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PROFILEService]
    });
  });

  it('should ...', inject([PROFILEService], (service: PROFILEService) => {
    expect(service).toBeTruthy();
  }));
});
