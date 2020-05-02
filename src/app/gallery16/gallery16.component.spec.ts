import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery16Component } from './gallery16.component';

describe('Gallery16Component', () => {
  let component: Gallery16Component;
  let fixture: ComponentFixture<Gallery16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
