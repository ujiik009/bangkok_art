import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFavoritePage } from './your-favorite.page';

describe('YourFavoritePage', () => {
  let component: YourFavoritePage;
  let fixture: ComponentFixture<YourFavoritePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourFavoritePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourFavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
