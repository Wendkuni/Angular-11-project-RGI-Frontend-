/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthHautService } from './authHaut.service';

describe('Service: AuthHaut', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthHautService]
    });
  });

  it('should ...', inject([AuthHautService], (service: AuthHautService) => {
    expect(service).toBeTruthy();
  }));
});
