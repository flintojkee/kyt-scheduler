import { TestBed } from '@angular/core/testing';

import { HomeStoreService } from './home-store.service';

describe('HomeStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeStoreService = TestBed.get(HomeStoreService);
    expect(service).toBeTruthy();
  });
});
