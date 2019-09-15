import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDayTripPage } from './one-day-trip.page';

describe('OneDayTripPage', () => {
  let component: OneDayTripPage;
  let fixture: ComponentFixture<OneDayTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDayTripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDayTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
