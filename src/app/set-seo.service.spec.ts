import { TestBed } from '@angular/core/testing';

import { SetSeoService } from './set-seo.service';

describe('SetSeoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetSeoService = TestBed.get(SetSeoService);
    expect(service).toBeTruthy();
  });
});
