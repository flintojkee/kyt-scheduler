import { TestBed } from '@angular/core/testing';

import { AdminPopupService } from './admin-popup.service';

describe('AdminPopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminPopupService = TestBed.get(AdminPopupService);
    expect(service).toBeTruthy();
  });
});
