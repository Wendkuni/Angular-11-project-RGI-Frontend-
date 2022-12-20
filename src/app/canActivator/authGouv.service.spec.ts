/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGouvService } from './authGouv.service';

describe('Service: AuthGouv', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGouvService]
    });
  });

  it('should ...', inject([AuthGouvService], (service: AuthGouvService) => {
    expect(service).toBeTruthy();
  }));
});
