import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBusesComponent } from './get-all-buses.component';

describe('GetAllBusesComponent', () => {
  let component: GetAllBusesComponent;
  let fixture: ComponentFixture<GetAllBusesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllBusesComponent]
    });
    fixture = TestBed.createComponent(GetAllBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
