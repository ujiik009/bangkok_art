import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourEventPage } from './your-event.page';

describe('YourEventPage', () => {
  let component: YourEventPage;
  let fixture: ComponentFixture<YourEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
