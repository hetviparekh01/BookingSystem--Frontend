import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRoutesComponent } from './get-all-routes.component';

describe('GetAllRoutesComponent', () => {
  let component: GetAllRoutesComponent;
  let fixture: ComponentFixture<GetAllRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllRoutesComponent]
    });
    fixture = TestBed.createComponent(GetAllRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
