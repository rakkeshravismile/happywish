import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery17Component } from './gallery17.component';

describe('Gallery17Component', () => {
  let component: Gallery17Component;
  let fixture: ComponentFixture<Gallery17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
