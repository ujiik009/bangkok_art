import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDayTripDetailPage } from './one-day-trip-detail.page';

describe('OneDayTripDetailPage', () => {
  let component: OneDayTripDetailPage;
  let fixture: ComponentFixture<OneDayTripDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDayTripDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDayTripDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
