import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddschedulerenderComponent } from './addschedulerender.component';

describe('AddschedulerenderComponent', () => {
  let component: AddschedulerenderComponent;
  let fixture: ComponentFixture<AddschedulerenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddschedulerenderComponent]
    });
    fixture = TestBed.createComponent(AddschedulerenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
