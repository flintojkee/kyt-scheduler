import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerRowComponent } from './scheduler-row.component';

describe('SchedulerRowComponent', () => {
  let component: SchedulerRowComponent;
  let fixture: ComponentFixture<SchedulerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulerRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
