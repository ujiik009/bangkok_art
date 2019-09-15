import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSlidesPage } from './image-slides.page';

describe('ImageSlidesPage', () => {
  let component: ImageSlidesPage;
  let fixture: ComponentFixture<ImageSlidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSlidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
