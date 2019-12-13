import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCoreComponent } from './popup-core.component';

describe('PopupCoreComponent', () => {
  let component: PopupCoreComponent;
  let fixture: ComponentFixture<PopupCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
