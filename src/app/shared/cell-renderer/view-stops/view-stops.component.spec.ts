import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStopsComponent } from './view-stops.component';

describe('ViewStopsComponent', () => {
  let component: ViewStopsComponent;
  let fixture: ComponentFixture<ViewStopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStopsComponent]
    });
    fixture = TestBed.createComponent(ViewStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
