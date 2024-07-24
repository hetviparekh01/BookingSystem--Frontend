import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllStationsComponent } from './get-all-stations.component';

describe('GetAllStationsComponent', () => {
  let component: GetAllStationsComponent;
  let fixture: ComponentFixture<GetAllStationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllStationsComponent]
    });
    fixture = TestBed.createComponent(GetAllStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
