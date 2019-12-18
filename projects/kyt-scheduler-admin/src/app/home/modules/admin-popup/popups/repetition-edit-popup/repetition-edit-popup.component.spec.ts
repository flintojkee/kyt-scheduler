import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetitionEditPopupComponent } from './repetition-edit-popup.component';

describe('RepetitionEditPopupComponent', () => {
  let component: RepetitionEditPopupComponent;
  let fixture: ComponentFixture<RepetitionEditPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepetitionEditPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepetitionEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
