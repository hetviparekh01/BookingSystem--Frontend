import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularBusComponent } from './particular-bus.component';

describe('ParticularBusComponent', () => {
  let component: ParticularBusComponent;
  let fixture: ComponentFixture<ParticularBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticularBusComponent]
    });
    fixture = TestBed.createComponent(ParticularBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
