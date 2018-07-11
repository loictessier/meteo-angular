import { TestBed, inject } from '@angular/core/testing';

import { DataApiHttpService } from './data-api-http.service';

describe('DataApiHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataApiHttpService]
    });
  });

  it('should be created', inject([DataApiHttpService], (service: DataApiHttpService) => {
    expect(service).toBeTruthy();
  }));
});
