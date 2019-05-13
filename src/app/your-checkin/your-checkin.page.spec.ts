import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCheckinPage } from './your-checkin.page';

describe('YourCheckinPage', () => {
  let component: YourCheckinPage;
  let fixture: ComponentFixture<YourCheckinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourCheckinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCheckinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
