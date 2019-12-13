import { TestBed } from '@angular/core/testing';

import { UserPopupService } from './user-popup.service';

describe('UserPopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPopupService = TestBed.get(UserPopupService);
    expect(service).toBeTruthy();
  });
});
