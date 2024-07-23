import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllScheduleComponent } from './get-all-schedule.component';

describe('GetAllScheduleComponent', () => {
  let component: GetAllScheduleComponent;
  let fixture: ComponentFixture<GetAllScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllScheduleComponent]
    });
    fixture = TestBed.createComponent(GetAllScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
