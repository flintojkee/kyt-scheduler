import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollRepetitionPopupComponent } from './enroll-repetition-popup.component';

describe('EnrollRepetitionPopupComponent', () => {
  let component: EnrollRepetitionPopupComponent;
  let fixture: ComponentFixture<EnrollRepetitionPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollRepetitionPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollRepetitionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
