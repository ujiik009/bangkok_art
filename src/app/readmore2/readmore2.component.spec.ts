import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Readmore2Component } from './readmore2.component';

describe('Readmore2Component', () => {
  let component: Readmore2Component;
  let fixture: ComponentFixture<Readmore2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Readmore2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Readmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
