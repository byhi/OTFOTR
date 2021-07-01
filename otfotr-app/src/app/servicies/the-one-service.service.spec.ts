/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TheOneServiceService } from './the-one-service.service';

describe('Service: TheOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheOneServiceService]
    });
  });

  it('should ...', inject([TheOneServiceService], (service: TheOneServiceService) => {
    expect(service).toBeTruthy();
  }));
});
